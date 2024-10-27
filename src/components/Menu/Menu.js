import React from 'react';
import MenuHeader from './MenuHeader';
import MenuList from './MenuList';
import MenuFooter from './MenuFooter';
import styles from './Menu.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <MenuHeader />
      <MenuList />
      <MenuFooter />
    </div>
  );
};

export default Sidebar;
