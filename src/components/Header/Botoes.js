import React from 'react';
import styles from './Botoes.module.css';

const Botoes = () => {
  return (
    <div className={styles.botoes_container}>
      <button className={styles.login_btn}>Login</button>
      <button className={styles.criar_conta_btn}>Criar Conta</button>
    </div>
  );
};

export default Botoes;
