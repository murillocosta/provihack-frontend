/* eslint-disable prettier/prettier */
/* eslint-disable react/display-name */
import React from "react";
import { Routes, Route } from 'react-router-dom';

import { Main } from './pages/Main';
// import { Login } from './pages/Login'

export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />}/>

      <Route exact path="/sobrenos">
          sobrenos
      </Route>

      <Route exact path="/iniciativas">
          iniciativas
      </Route>

      {/* <Route exact path="#info">
          info
      </Route> */}

      <Route exact path="/contato">
          contato
      </Route>

      {/* <Route exact path="/login" element={<Login />}/> */}
    </Routes>
  );
}
