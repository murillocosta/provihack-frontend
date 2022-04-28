/* eslint-disable prettier/prettier */
import { NavBar, Logo } from './styles';
import { Burger } from './Burger';

export const Nav = () => {
  // const userImg = require('./pp.jpg');

  return (
    <NavBar>
      <Logo>EcoPartilhar</Logo>
      <Burger />

      {/* <NavBarMenu>
        <NavBarItem>
          <a href="">Início</a>
        </NavBarItem>
        <NavBarItem>
          <a href="">Sobre nós</a>
        </NavBarItem>
        <NavBarItem>
          <a href="">Iniciativas</a>
        </NavBarItem>
        <NavBarItem>
          <a href="">Informações</a>
        </NavBarItem>
        <NavBarItem>
          <a href="">Contato</a>
        </NavBarItem>
      </NavBarMenu>
      <UserMenu>
        <h6>Meu perfil</h6>
        <img src={userImg} alt="Frame redondo contendo a imagem de perfil do usuário logado." />
      </UserMenu> */}
    </NavBar>
  );
};
