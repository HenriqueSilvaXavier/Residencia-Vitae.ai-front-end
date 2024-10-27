import React, { useState, useEffect } from 'react';
import { FaHome, FaPlus, FaFileAlt, FaBell, FaCheckSquare } from 'react-icons/fa';
import MenuItem from './MenuItem';
import styles from './MenuList.module.css';
import { Link, useLocation } from "react-router-dom";

const MenuList = () => {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Define o item ativo com base na URL
    switch (location.pathname) {
      case '/':
        setActiveItem('Início');
        break;
      case '/novo-curriculo':
        setActiveItem('Novo Currículo');
        break;
      case '/meus-curriculos':
        setActiveItem('Meus Currículos');
        break;
      case '/notificacoes':
        setActiveItem('Notificações');
        break;
      case '/feedbacks':
        setActiveItem('Feedbacks');
        break;
      default:
        setActiveItem(null);
    }
  }, [location.pathname]);

  const handleMenuItemClick = (label) => {
    setActiveItem(label); // Define o item ativo ao clicar
  };

  return (
    <div style={{ width: '90%' }}>
      <ul className={styles.menuList}>
        <Link to="/">
          <MenuItem
            icon={<FaHome />}
            label="Início"
            marked={activeItem === "Início"}
            onClick={() => handleMenuItemClick("Início")}
          />
        </Link>

        <Link to="/novo-curriculo">
          <MenuItem
            icon={<FaPlus />}
            label="Novo Currículo"
            marked={activeItem === "Novo Currículo"}
            onClick={() => handleMenuItemClick("Novo Currículo")}
          />
        </Link>

        <MenuItem
          icon={<FaFileAlt />}
          label="Meus Currículos"
          showExpand={true}
          marked={activeItem === "Meus Currículos"}
          onClick={() => handleMenuItemClick("Meus Currículos")}
        />

        <MenuItem
          icon={<FaBell />}
          label="Notificações"
          showExpand={true}
          marked={activeItem === "Notificações"}
          onClick={() => handleMenuItemClick("Notificações")}
        />

        <MenuItem
          icon={<FaCheckSquare />}
          label="Feedbacks"
          badge="5"
          marked={activeItem === "Feedbacks"}
          onClick={() => handleMenuItemClick("Feedbacks")}
        />
      </ul>
    </div>
  );
};

export default MenuList;
