import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const GithubContext = createContext();

function useGithub() {
  return useContext(GithubContext);
}

const GithubProvider = ({ children }) => {
  const rootUrl = "https://api.github.com";
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  // requests loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  //error
  const [error, setError] = useState({ show: false, msg: "" });

  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true);
    // get the response from server
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err.message)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;

      await Promise.all([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((results) => {
          const [
            { data: reposData, status: reposStatus },
            { data: followersData, status: followersStatus },
          ] = results;
          const status = 200;
          if (reposStatus && followersStatus === status) {
            setRepos(reposData);
            setFollowers(followersData);
          }
        })
        .catch((err) => console.log(err.message));
    } else {
      toggleError(true, "there is no user with username");
    }
    checkRequests();
    setIsLoading(false);
  };

  // check rate
  const checkRequests = useCallback(async () => {
    await axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  // error
  useEffect(() => {
    checkRequests();
  }, [checkRequests, githubUser, followers, repos]);

  const value = {
    githubUser,
    repos,
    followers,
    searchGithubUser,
    error,
    requests,
    isLoading,
  };
  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider, useGithub };
