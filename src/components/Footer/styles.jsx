/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const ContainerFooter = styled.div`
  display: flex;
  gap: 40px;
  margin: 40px 80px;
  font-family: Lato, sans-serif;
  justify-content: center;

  & h4 {
    font-size: 14px;
    font-weight: bold;
  }

  & div {
    padding: 15px;
  }

  & ul {
    list-style: none;
    font-size: 12px;
  }

  @media (max-width: 830px) {
    flex-direction: column;
  }
`;
