/* eslint-disable prettier/prettier */
import { StyledNavBar, NavBarMenu, NavBarItem, UserMenu } from './styles';

export const NavBar = () => {
  const userImg = require('./pp.jpg');

  return (
    <header>
      <StyledNavBar>
        <h3>EcoPartilhar</h3>
        <NavBarMenu>
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
        </UserMenu>
      </StyledNavBar>
    </header>
  );
};
