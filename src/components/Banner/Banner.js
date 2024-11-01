import React from 'react';
import styles from './Banner.module.css';
import Novo_curriculo from './Novo_curriculo'
import Painel from './Painel'

const Banner = () => {
  return (
    <div className={styles.bannerDiv}>
        <div className={styles.bannerContainer}>
            <h1 className={styles.bannerTitulo}>Tela Inicial</h1>
            <p className={styles.bannerDescricao}>Uma visão geral de acordo com o seu perfil</p>
            <Novo_curriculo/>
        </div>
        <Painel/>
    </div>
  );
};

export default Banner;
