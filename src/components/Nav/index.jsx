/* eslint-disable prettier/prettier */
import { NavBar, Logo } from './styles';
import { Burger } from './Burger';

export const Nav = () => {
  return (
    <NavBar>
      <Logo>EcoPartilhar</Logo>
      <Burger />
    </NavBar>
  );
};
