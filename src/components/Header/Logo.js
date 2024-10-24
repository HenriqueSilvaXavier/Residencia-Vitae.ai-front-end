import styles from './Logo.module.css';


function Logo() {
  return (
    <div className={styles.logoDiv}>       
        <img src={require('./Vector.png')} alt="Logo" />
        <p className={styles.nomeLogo}>Vitae.ai</p>
    </div> 
  );
}

export default Logo;
