/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const NavBar = styled.nav`
  position: fixed;
  align-items: center;
  background-color: rgb(53, 53, 53);
  color: white;
  display: flex;
  flex-flow: row nowrap;
  height: 3.125rem;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  box-shadow: 0px 2px 2px rgba(53, 53, 53, 0.3);
  z-index: 100;
`;

export const NavBarMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  margin: 0 auto;
  align-items: center;

  @media (max-width: 830px) {
    flex-flow: column nowrap;
    background-color: rgb(53, 53, 53);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    li {
      color: white;
    }
  }
`;

export const Logo = styled.div`
  color: white;
`;

export const NavBarItem = styled.li`
  margin-left: 1rem;
  text-shadow: 0px 2px 2px rgba(1, 1, 1, 0.5);

  & a {
    color: white;
    text-decoration: none;
  }

  & :hover {
    color: #4dbc5d;
    transition: all 0.2s ease-in-out;
  }
`;

export const UserMenu = styled.div`
  cursor: pointer;
  display: flex;
  align-self: center;
  // text-shadow: 0px 2px 2px rgba(1, 1, 1, 0.5);
  z-index: 20;

  & h6 {
    align-self: center;
    margin-right: 1rem;
  }
  & h6 a {
    text-decoration: none;
    color: white;
  }
  & h6 a:hover {
    color: #08aabf;
    transition: all 0.2s ease-in-out;
  }

  & img {
    border-radius: 50%;
    max-width: 2.5rem;
    max-height: 2.5rem;
    // box-shadow: 0px 2px 2px rgba(1, 1, 1, 0.5);
  }
`;
