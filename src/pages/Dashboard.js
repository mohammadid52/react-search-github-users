import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { useGithub } from "../context/context";

const Dashboard = () => {
  const { isLoading } = useGithub();

  const showOnLoading = (
    <main>
      <Navbar />
      <Search />
      <img src={loadingImage} className="loading-img" alt="loding" />
    </main>
  );

  if (isLoading) {
    return showOnLoading;
  }
  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
