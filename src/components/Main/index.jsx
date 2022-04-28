/* eslint-disable prettier/prettier */
import React from 'react';
import { Teste, Button, BemVindo, TxtConsumo, CamadaTransparente } from './styles';

export const Main = () => {
  return (
    <>
    <CamadaTransparente>
    <Teste>
        <BemVindo>BEM-VINDO AO ECO PARTILHAR!</BemVindo>
        <TxtConsumo>Promovendo o consumo  sustentável</TxtConsumo>
        <Button>
          Saiba mais sobre essa iniciativa
        </Button>
      </Teste>
    </CamadaTransparente>
    </>
  );
};
