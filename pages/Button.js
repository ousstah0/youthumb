// components/Button.js
import React from 'react';

const Button = ({ text, link }) => {
  return (
    <a href={link} className="button">
      {text}
    </a>
  );
};

export default Button;
