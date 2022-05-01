import styled from 'styled-components';
import imgCard from '../../img/modelCardPhoto.jpg';

export const Section = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 16px;
  margin: 40px auto;

  @media (max-width: 830px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`;

export const PhotoContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  width: 509px;
  height: 660px;
  background-attatchment: fixed;
  background: url('${imgCard}') no-repeat;
`;

export const InfoContainer = styled.section`
  max-width: 509px;
  max-height: 660px;
  padding: 16px;
  border: 1px solid lightgray;
  font-family: 'Lato', sans-serif;

  & h1 {
    font-family: 'Lato', sans-serif;
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  & h2 {
    color: rgb(7, 155, 174);
    margin-bottom: 20px;
  }
  & h3 {
    font-family: 'Lato', sans-serif;
    font-size: 1em;
    margin-bottom: 20px;
  }
  & h4 {
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  & p {
    font-family: 'Lato', sans-serif;
    font-size: 0.9em;
    margin-bottom: 20px;
  }
  & span {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 20px;

    & span {
      border: 2px solid lightgray;
      width: 35px;
      height: 29px;
      display: flex;
      align-items: center;
      color: gray;
      font-weight: bold;
      cursor: pointer;
    }
    & span:hover {
      background: rgb(65, 60, 65);
      transition: 0.8s;
    }
    @media (max-width: 830px) {
      margin-top: 10px;
    }
  }
`;

export const CompositionContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  justify-content: center;

  & div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    & label {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    & ul {
      list-style: none;
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  width: 336px;
  height: 46px;
  color: white;
  background: rgb(53, 53, 53);
  border-radius: 44px;
  position: absolute;
  margin-top: 20px;
  left: 50rem;
  cursor: pointer;
`;

export const CycleSymbol = styled.i`
  color: rgb(126, 216, 219);
  font-size: 70px;
  text-align: center;
  align-self: center;
`;
