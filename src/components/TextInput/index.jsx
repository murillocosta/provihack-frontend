/* eslint-disable prettier/prettier */
import P from 'prop-types';
import React from 'react';
import './style.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text__input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Busque pelo produto desejado"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func,
};
