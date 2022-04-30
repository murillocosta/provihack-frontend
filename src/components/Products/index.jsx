/* eslint-disable prettier/prettier */
import React from 'react';
import P from 'prop-types';
import { StyledProducts } from './styles';
import { Card } from '../Card';

export const Products = ({ products = [] }) => (
  <StyledProducts>
    {products.map((product) => (
      <Card key={product.id} title={product.title} body={product.body} id={product.id} cover={product.cover} />
    ))}
  </StyledProducts>
);

Products.defaultProps = {
  products: [],
};

Products.propTypes = {
  products: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
