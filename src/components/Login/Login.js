import React from 'react';
import Logo from  '../Header/Logo';
import styles from './Login.module.css';
import Input from './LoginInputs'

function Login() {
  return (
    <div className={styles.loginOverlay}>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <Logo />
        </div>
        <h2>Fazer login</h2>
        <form>
          <div className={styles.formGroup}>
            <Input nome="email" tipo="email" placeholder="E-mail"/>
          </div>
          <div className={styles.formGroup}>
            <Input nome="password" tipo="password" placeholder="Senha"/>
          </div>
          <div className={styles.formOptions}>
            <label>
              <input type="checkbox" />
              Lembrar
            </label>
            <a href="/forgot-password" className={styles.forgotPassword}>Esqueceu a senha?</a>
          </div>
          <a href="/cadastrar" className={styles.cadastrar}>Não tem conta? Cadastre-se!</a>
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
