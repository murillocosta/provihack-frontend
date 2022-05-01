/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Main = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100vh;

  & h3 {
    color: rgb(53, 53, 53);
    padding: 20px;
    margin: 10px auto 10px auto;
    border-bottom: 1px solid black;
  }
  & section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    & div {
      padding: 7px;

      & div {
        justify-content: flex-start;
        display: flex;
        align-items: center;
        margin-right: 10px;
        margin-top: 50px;
        margin-bottom: 20px;
        gap: 10px;

        & p {
          margin-top: 30px;
        }
      }
    }
  }
`;

export const Circle = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  align-items: center;
`;
