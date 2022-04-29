import styled from 'styled-components';
import imgPrincipal from '../../img/img-principal.jpg';
import imgRec from '../../img/recycled.jpg';

export const ImgMain = styled.div`
  background: url('${imgPrincipal}') no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  gap: 10px;
`;

export const Container2 = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  gap: 10px;
`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #4dbc5d, #08aabf);
  box-shadow: 2px 1px 0px rgb(0 0 0 / 16%);
  width: 354px;
  height: 56px;
  font-weight: bold;
  font: 1.2rem;
  font-family: Antonio, sans serif;
  border-radius: 2.7rem;
  color: white;

  @media (max-width: 830px) {
    width: 300px;
    height: 50px;
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    width: 250px;
    height: 40px;
    font-size: 0.9rem;
  }
`;

export const BemVindo = styled.h1`
  color: #ffebb8;
  text-shadow: 2px 1px 0px rgb(0 0 0 / 13%);
  font-family: Antonio, sans-serif;
  font-weight: bold;
  font-size: 2rem;

  @media (max-width: 830px) {
    font-size: 1.7rem;
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const TxtConsumo = styled.h2`
  color: #ffffff;
  font-size: 4.5rem;
  text-shadow: 2px 1px 0px rgb(0 0 0 / 16%);
  font-family: Alata, sans serif;
  text-align: center;

  @media (max-width: 830px) {
    font-size: 3.5rem;
  }

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const ImgRecycled = styled.div`
  width: 100%;
  height: 100%;
  background: url('${imgRec}') no-repeat;
`;
