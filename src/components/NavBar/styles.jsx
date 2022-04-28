import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  align-items: center;
  background-color: rgb(53, 53, 53);
  color: white;
  display: flex;
  flex-direction: row;
  height: 3.125rem;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: hidden;
`;

export const NavBarMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  margin: 0 auto;
`;

export const NavBarItem = styled.li`
  margin-left: 1rem;
  text-shadow: 0px 2px 2px rgba(1, 1, 1, 0.5);

  & a {
    text-decoration: none;
    color: white;
  }

  & :hover {
  }
`;

export const UserMenu = styled.div`
  display: flex;
  cursor: pointer;
  text-shadow: 0px 2px 2px rgba(1, 1, 1, 0.5);

  & h6 {
    align-self: center;
    margin-right: 0.5rem;
  }

  & img {
    border-radius: 50%;
    max-width: 2.5rem;
    max-height: 2.5rem;
    box-shadow: 0px 2px 2px rgba(1, 1, 1, 0.5);
  }
`;
