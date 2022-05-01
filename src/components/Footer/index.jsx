/* eslint-disable prettier/prettier */
import React from 'react';
import { ContainerFooter } from './styles.jsx'
import seguranca from '../../img/letsencrypt.png'
import pagamentos from '../../img/pagamentos.png'

export const Footer = () => {
  return (
    <>
      <ContainerFooter id="contato">
        <div>
          <h4>AJUDA E SUPORTE</h4>
          <ul>
            <li>Dúvidas</li>
            <li>Políticas de Pedidos e entregas</li>
            <li>Políticas de privacidade</li>
            <li>Políticas Termos e Condições</li>
            <li>Políticas de devoluções</li>
          </ul>
        </div>

        <div>
          <h4>ATENDIMENTO AO CLIENTE</h4>
          <ul>
            <li>Fale conosco</li>
          </ul>
        </div>

        <div>
          <h4>FORMAS DE PAGAMENTO</h4>
          <img src={pagamentos} />
        </div>

        <div>
          <h4>SEGURANÇA</h4>
          <img src={seguranca} />
        </div>


      </ContainerFooter>
    </>
  );
};
