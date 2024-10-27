import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './MenuHeader.module.css';

const MenuHeader = () => {
  return (
    <div className={styles.menuHeader}>
      <p className={styles.menuTitulo}>MENU</p>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Buscar" className={styles.searchInput} />
        <FaSearch color="#2B2B2B" className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default MenuHeader;
