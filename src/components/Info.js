import React from "react";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { useGithub } from "../context/context";

const UserInfo = () => {
  const { githubUser } = useGithub();
  const { public_repos, public_gists, followers, following } = githubUser;
  const Items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      color: "pink",
      value: public_repos,
      label: "Repos",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      color: "green",
      value: followers,
      label: "Followers",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      color: "purple",
      value: following,
      label: "Following",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      color: "yellow",
      value: public_gists,
      label: "Gists",
    },
  ];

  const Item = ({ icon, color, value, label }) => (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );

  return (
    <section className="section">
      <Wrapper className="section-center">
        {Items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
