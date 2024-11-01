import styles from './Nav.module.css';

function Nav() {
  return (
    <div className={styles.navDiv}>       
      <ul>
        <li className={styles.itemNav}>Início</li>
        <li className={styles.itemNav}>Como Funciona</li>
        <li className={styles.itemNav}>Accenture</li>
        <li className={styles.itemNav}>Sobre Nós</li>
      </ul>
    </div> 
  );
}

export default Nav;
