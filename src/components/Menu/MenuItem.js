import React from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({ icon, label, badge, marked}) => {
  return (
    <li className={`${styles.menuItem} ${marked ? styles.active : ''}`}>
      {icon}
      <span className={styles.label}>{label}</span>
      {badge && <div className={styles.notificationBadge}>{badge}</div>}
    </li>
  );
};

export default MenuItem;
