/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const ProductCard = styled.div`
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 100ms ease-in-out;

  & :hover {
    transform: scale(1.05);
  }

  & img {
    max-width: 100%;
  }
`;

export const ProductContent = styled.div`
  padding: 30px;
`;
