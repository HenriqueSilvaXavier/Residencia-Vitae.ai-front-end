import React from 'react';
import styles from './Painel.module.css';

const Painel = () => {
  return (
    <div className={styles.painel}>
        <p className={styles.frase}>Que venha a mudança</p>
        <p className={styles.fraseBranca}>Que venha a mudança</p>
        <p className={styles.frase}>Que venha a mudança</p>

        <div className={styles.logoDiv}>       
            <img src={require('./Vector.png')} alt="Logo" />
            <p className={styles.nomeLogo}>Vitae.ai</p>
        </div> 

        <img src={require('./linhas.png')} className={styles.linhas}></img>
    </div>
  );
};

export default Painel;
