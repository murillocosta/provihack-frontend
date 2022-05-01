/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarMenu, NavBarItem, UserMenu } from './styles';

const userImg = require('../../img/logged-out.jpg');
const circleLogin = require('../../img/circleLogin.png')

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
          <a href="/#iniciativas">Iniciativas</a>
        </NavBarItem>
        <NavBarItem>
          <a href="/#sobrenos">Sobre nós</a>
        </NavBarItem>
        <NavBarItem>
          <a href="/#contato">Contato</a>
        </NavBarItem>
      </NavBarMenu>
      <UserMenu>
        <h6>
          <Link to=""></Link>
        </h6>
        <img src={circleLogin} alt="Frame redondo contendo a imagem de perfil do usuário logado." />
      </UserMenu>
    </>
  );
};
