import React from 'react';
import Logo from  '../Header/Logo';
import styles from './Login.module.css';

function Input({tipo, placeholder, nome}) {
  return (
    <>
        <input type={tipo} id={nome} placeholder={placeholder} />
    </>
  );
}

export default Input;
