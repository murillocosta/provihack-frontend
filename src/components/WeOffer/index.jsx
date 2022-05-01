/* eslint-disable prettier/prettier */
import React from 'react';
import { Main, Circle } from './styles';
import needle from '../../img/Needle.png'
import hanger from '../../img/Hanger.png'
import about from '../../img/About.png'
import approval from '../../img/Approval.png'

export const WeOffer = () => {
  return (
    <Main>
      <h3>O que nós oferecemos?</h3>
      <section>
        <div>
          <div>
            <Circle><img src={needle} /></Circle>
            <p>
              Transparência sobre os processos: <br /> entenda como a sua roupa é feita
            </p>
          </div>
          <div>
            <Circle><img src={hanger} /></Circle>
            <p>
              Conexão com marcas que produzem peças de <br /> qualidade, que vão durar
            </p>
          </div>
        </div>
        <div>
          <div>
            <Circle><img src={approval} /></Circle>
            <p>
              Curadoria de marcas que estão de <br /> acordo com nossa filosofia sustentável
            </p>
          </div>
          <div>
            <Circle><img src={about} /></Circle>
            <p>
              Informações claras sobre o bem que você faz ao
              <br /> meio ambeinte ao escolher uma peça
              <br /> selecionada por nós
            </p>
          </div>
        </div>
      </section>
    </Main>
  );
};
