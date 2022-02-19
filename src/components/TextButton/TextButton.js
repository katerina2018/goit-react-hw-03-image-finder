import React from 'react';
import propTypes from 'prop-types';
import s from './TextButton.module.css';

const TextButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" className={s.Button} onClick={onClick} {...allyProps}>
    {children}
  </button>
);

TextButton.defaultProps = {
  onClick: () => null,
  children: null,
};

TextButton.propTypes = {
  onClick: propTypes.func,
  children: propTypes.node,
};

export default TextButton;
