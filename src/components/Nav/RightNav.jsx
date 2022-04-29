/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarMenu, NavBarItem, UserMenu } from './styles';

const userImg = require('./pp2.jpg');

// eslint-disable-next-line react/prop-types
export const RightNav = ({ open }) => {
  return (
    <>
      <NavBarMenu open={open}>
        <NavBarItem>
          <Link to="/">Início</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to="/sobrenos">Sobre nós</Link>
        </NavBarItem>
        <NavBarItem>
          <Link to="/iniciativas">Iniciativas</Link>
        </NavBarItem>
        <NavBarItem>
          <a href="/#texto2">Informações</a>
        </NavBarItem>
        <NavBarItem>
          <Link to="/contato">Contato</Link>
        </NavBarItem>
      </NavBarMenu>
      <UserMenu>
        <h6><Link to="/login">Login</Link></h6>
        <img src={userImg} alt="Frame redondo contendo a imagem de perfil do usuário logado." />
      </UserMenu>
    </>
  );
};
