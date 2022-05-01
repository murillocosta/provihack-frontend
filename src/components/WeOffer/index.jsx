import React from 'react';
import { Main } from './styles';

export const WeOffer = () => {
  return (
    <Main>
      <h3>O que nós oferecemos?</h3>
      <section>
        <div>
          <div>
            <i className="fa-solid fa-circle-info"></i>
            <p>
              Transparência sobre os processos: <br /> entenda como a sua roupa é feita
            </p>
          </div>
          <div>
            <i className="fa-solid fa-circle-info"></i>
            <p>
              Conexão com marcas que produzem peças de <br /> qualidade, que vão durar
            </p>
          </div>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-circle-info"></i>
            <p>
              Curadoria de marcas que estão de <br /> acordo com nossa filosofia sustentável
            </p>
          </div>
          <div>
            <i className="fa-solid fa-circle-info"></i>
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
