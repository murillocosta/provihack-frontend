/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import imgPrincipal from '../../img/img-principal.jpg';
import imgRec from '../../img/recycled.jpg';

export const ImgMain = styled.div`
  background: url('${imgPrincipal}') no-repeat;
  background-position: center;
  background-attachment: fixed;
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
  text-align: center;

  & section {
    display: flex;
    flex-flow: column nowrap;
    background: white;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  & div {
    display: flex;
    flex-flow: row nowrap;
    text-align: center;
    padding: 10px;
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    font-weight: 300;

    & div {
      margin: 5rem 1rem;
      display: flex;
      flex-flow: column nowrap;
      & i{
        margin-bottom: 1rem;
      }
    }
  }


  & h3 {
    color: rgb(80, 73, 73);
    border-bottom: 0.5px solid black;
    padding: 3rem;
  }

  @media (max-width: 830px) {
    & section {
      margin-top: 5rem;
    }

    & h3 {
      width: 80%;
      padding: 2rem;
      margin-top: 200px;

    }

    & div {
      flex-flow: column nowrap;
      padding: 0;
      font-size: 0.9rem;
      margin: 50px;

      & div {
        margin-top: 5px;
      }
    }
  }
`;

export const Container2 = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  overflow: clip;
  & div {
    padding: 3rem;
  }
  & div h1 {
    font-family: Antonio, sans-serif;
    margin-bottom: 5rem;
    font-weight: bold;
    font-size: 2rem;
  }
  & div p {
    font-size: 1rem;
  }
  @media (max-width: 830px) {
    & div h1 {

      margin-bottom: 3rem;

    }
  }
`;

export const Button = styled.button`
  background: linear-gradient(to right, #4dbc5d, #08aabf);
  box-shadow: 2px 1px 0px rgb(0 0 0 / 16%);
  width: 354px;
  height: 56px;
  font-weight: bold;
  font-size: 1.2rem;
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
  min-width: 50%;
  height: 100%;
  background: url('${imgRec}') no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 830px) {
    display: none;
  }
`;
