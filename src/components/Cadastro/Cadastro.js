import React from 'react';
import Logo from  '../Header/Logo';
import styles from '../Login/Login.module.css';
import Input from '../Login/LoginInputs'

function Cadastro() {
  return (
    <div className={styles.loginOverlay}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <Logo />
        </div>
        <h2>Cadastrar</h2>
        <form>
          <div className={styles.formGroup}>
            <Input nome="nome" tipo="text" placeholder="Nome"/>
          </div>
          <div className={styles.formGroup}>
            <Input nome="email" tipo="email" placeholder="Endereço de e-mail"/>
          </div>
          <div className={styles.formGroup}>
            <Input nome="password" tipo="password" placeholder="Senha"/>
          </div>
          <div className={styles.formGroup}>
            <Input nome="telefone" tipo="tel" placeholder="Telefone"/>
          </div>
          <a href="/" className={styles.cadastrar}>Já possui conta? Faça o Login</a>
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
