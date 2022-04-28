/* eslint-disable prettier/prettier */
import React from 'react';
import { Img, Body, Button, BemVindo, TxtConsumo } from './styles';

export const Main = () => {
  return (
    <>
    <Img>
    <Body>
        <BemVindo>BEM-VINDO AO ECO PARTILHAR!</BemVindo>
        <TxtConsumo>Promovendo o consumo <br /> sustentável</TxtConsumo>
        <Button>
          Saiba mais sobre essa iniciativa
        </Button>
      </Body>
    </Img>

    </>
  );
};
