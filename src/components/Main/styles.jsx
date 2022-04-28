import styled from 'styled-components';
import img from '../../img/img-principal.jpg';

export const CamadaTransparente = styled.div`
  background: #1a1919;
  width: 100%;
  height: 100vh;
  opacity: 0.2;
  position: absolute;
  z-index: 98;
`;

export const Teste = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
`;

export const Button = styled.button`
  position: relative;
  background-image: linear-gradient(to right, #4dbc5d, #08aabf);
  width: 354px;
  height: 56px;
  font-weight: bold;
  font-size: Antonio, sans serif;
  border-radius: 44px;
  color: white;
`;

export const BemVindo = styled.h1`
  color: white;
  text-shadow: 0px -1px 1px rgb(0 0 0 / 48%);
  font-family: Antonio, sans-serif;
  font-weight: bold;
  font-size: 32;
`;

export const TxtConsumo = styled.h2`
  color: white;
  font-size: 42;
  font-family: Alata, sans serif;
`;
