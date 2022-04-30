/* eslint-disable prettier/prettier */
import P from 'prop-types';
import React from 'react';
import './styles.css';

export const Button = ({ onClick, disabled }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    Carregar mais produtos
  </button>
);

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
