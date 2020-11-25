import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const isUser = isAuthenticated && user;
  return (
    <Wrapper>
      {isUser ? (
        <>
          {user.picture && <img src={user.picture} alt={user.name} />}
          <h4>
            Hello <span>{user.email}</span>
          </h4>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    text-transform: none;
    margin-bottom: 0;
    font-weight: 400;
    span {
      font-weight: 600;
    }
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
    ::focus,
    ::active {
      border: none;
      outline: none;
    }
  }
`;

export default Navbar;
