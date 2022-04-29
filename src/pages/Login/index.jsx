/* eslint-disable prettier/prettier */
import React from 'react';
import { ContainerLogin, TitleLogin, Box, SpanTitle, Line, AltLogin } from './styles'
import Form from '../../components/Form/Form';

export const Login = () => {
  return (
    <ContainerLogin>
      <Box>
      <TitleLogin>Crie sua conta e venha <SpanTitle>partilhar</SpanTitle> com a gente</TitleLogin>

      <AltLogin><Line /> ou <Line /></AltLogin>

      <Form />
      </Box>
    </ContainerLogin>
  );
};

