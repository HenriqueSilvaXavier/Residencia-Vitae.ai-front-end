import React, { useState } from 'react';
import styles from './MenuItem.module.css';
import MenuExpand from '../../imagens/menu-expand.svg'
import CurriculoList from '../../imagens/curriculo-list.svg'
import { Link } from 'react-router-dom';

const SubMenu = () => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };
  return (
    <div className={styles.mainSubMenu}>
      <div className={styles.mainSubMenuCurriculoList}>
        <img src={CurriculoList} />
      </div>
      <div className={styles.mainSubMenuList}>
        <ul>
          <li>
            <Link to="/detalhe-curriculo/1">{truncateText('Data Science-2024', 17)}</Link>
          </li>
          <li>
            <Link to="/detalhe-curriculo/2">{truncateText('Full-Stack Dev-2023', 17)}</Link>
          </li>
          <li>
            <Link to="/detalhe-curriculo/3">{truncateText('Estágio-Accenture', 17)}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, badge, marked, showExpand, onClick }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleImageClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div style={{ position: 'relative' }}>
      <li className={`${styles.menuItem} ${marked ? styles.active : ''}`} onClick={onClick}>
        {icon}
        <span className={styles.label}>{label}</span>
        {badge && <div className={styles.notificationBadge}>{badge}</div>}
        {showExpand &&
          <img
            onClick={handleImageClick}
            style={{ position: 'absolute', right: 0, cursor: 'pointer', transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)' }}
            src={MenuExpand}
            alt="Expand Icon"
          />
        }
      </li>
      {isRotated && label === 'Meus Currículos' && <SubMenu />}
    </div>
  );
};

export default MenuItem;
