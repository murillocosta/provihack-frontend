/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../components/Header/index.jsx';
import { Footer } from '../../components/Footer/index.jsx'

import Routes from '../../Routes'

export const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />

    </BrowserRouter>
  );
};
