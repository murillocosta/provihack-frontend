/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Main } from '../../pages/Main/index.jsx';
import { Header } from '../../components/Header/index.jsx';

import Routes from '../../Routes'

export const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      
    </BrowserRouter>
  );
};
