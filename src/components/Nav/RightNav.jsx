/* eslint-disable prettier/prettier */
import React from 'react';
import { NavBarMenu, NavBarItem, UserMenu } from './styles';

const userImg = require('./pp2.jpg');

// eslint-disable-next-line react/prop-types
export const RightNav = ({ open }) => {
  return (
    <>
      <NavBarMenu open={open}>
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
        <h6><a href="">Login</a></h6>
        <img src={userImg} alt="Frame redondo contendo a imagem de perfil do usuário logado." />
      </UserMenu>
    </>
  );
};
