/* eslint-disable prettier/prettier */
import { NavBar, Logo } from './styles';
import { Burger } from './Burger';
import ecoParLogo from '../../img/ecoparlogo2.png'

export const Nav = () => {
  return (
    <NavBar>
      <Logo><img src={ecoParLogo} /></Logo>
      <Burger />
    </NavBar>
  );
};
