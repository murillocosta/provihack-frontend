/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarMenu, NavBarItem, UserMenu } from './styles';

const userImg = require('../../img/logged-out.jpg');

// eslint-disable-next-line react/prop-types
export const RightNav = ({ open }) => {
  return (
    <>
      <NavBarMenu open={open}>
        <NavBarItem>
          <a href="/#inicio">Início</a>
        </NavBarItem>
        <NavBarItem>
          <a href="/#texto2">Informações</a>
        </NavBarItem>
        <NavBarItem>
          <Link to="/iniciativas">Iniciativas</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to="/contato">Contato</Link>
        </NavBarItem>
        <NavBarItem>
          <a href="/#sobrenos">Sobre nós</a>
        </NavBarItem>
      </NavBarMenu>
      <UserMenu>
        <h6>
          <Link to="">Login</Link>
        </h6>
        <img src={userImg} alt="Frame redondo contendo a imagem de perfil do usuário logado." />
      </UserMenu>
    </>
  );
};
