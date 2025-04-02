import React from 'react';
import '/home/aaron/ita23-challenge/src/index.css';

function Button({ textOnly, onClick }) {
    const buttonClass = textOnly ? 'text-button' : 'button';
  
    return (
      <button className={buttonClass} onClick={onClick}>
        {textOnly ? 'Text Only' : 'Regular Button'}
      </button>
    );
  }
  

export default Button;