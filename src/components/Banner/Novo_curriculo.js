import React from 'react';
import styles from './Novo_curriculo.module.css';

const Banner = () => {
  return (
    <div className={styles.novoCurriculo}>
        <div className={styles.ellipse}>
            <img src={require('./download.png')}></img>
        </div>
        <p className={styles.novoCurriculoLabel}>Importar novo currículo</p>
    </div>
  );
};

export default Banner;
