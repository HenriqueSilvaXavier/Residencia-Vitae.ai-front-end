import React from 'react';
import { FaCog, FaSignOutAlt } from 'react-icons/fa';
import styles from './MenuFooter.module.css';

const MenuFooter = () => {
  return (
    <div className={styles.menuFooter}>
      <button className={styles.menuFooterItem}>
        <FaCog />
        <span>Ajustes</span>
      </button>
      <button className={styles.menuFooterItem2}>
        <FaSignOutAlt />
        <span>Sair</span>
      </button>
    </div>
  );
};

export default MenuFooter;
