import Logo from './Logo';
import Nav from './Nav';
import Botoes from './Botoes';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}> {/* Convencionado usar classes em minúsculas */}
      <Logo />
      <Nav />
      <Botoes />
    </header>
  );
}

export default Header;
