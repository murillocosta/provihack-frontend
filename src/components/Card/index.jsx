/* eslint-disable prettier/prettier */
import React from 'react';
import P from 'prop-types';
import { ProductCard, ProductContent } from './styles';

export const Card = ({ title, cover, body, id }) => (
  <ProductCard>
    <img src={cover} alt={title} />
    <ProductContent>
      <h2>
        {title} {id}
      </h2>
      <p>{body}</p>
    </ProductContent>
  </ProductCard>
);

Card.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
};
