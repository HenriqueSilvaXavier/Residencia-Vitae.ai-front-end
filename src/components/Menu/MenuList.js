import React, { useState } from 'react';
import { FaHome, FaPlus, FaFileAlt, FaBell, FaCheckSquare } from 'react-icons/fa';
import MenuItem from './MenuItem';
import styles from './MenuList.module.css';
import { Link } from "react-router-dom";

const MenuList = () => {
  const [activeItem, setActiveItem] = useState(null); // Estado para o item ativo

  const handleMenuItemClick = (label) => {
    setActiveItem(label); // Define o item ativo
  };

  return (
    <div style={{ width: '90%' }}>
      <ul className={styles.menuList}>
        <Link to="/">
          <MenuItem
            icon={<FaHome />}
            label="Início"
            marked={activeItem === "Início"} // Verifica se é o item ativo
            onClick={() => handleMenuItemClick("Início")} // Passa a função para o clique
          />
        </Link>

        <Link to="/novo-curriculo">
          <MenuItem
            icon={<FaPlus />}
            label="Novo Currículo"
            marked={activeItem === "Novo Currículo"} // Verifica se é o item ativo
            onClick={() => handleMenuItemClick("Novo Currículo")} // Passa a função para o clique
          />
        </Link>

        <MenuItem
          icon={<FaFileAlt />}
          label="Meus Currículos"
          showExpand={true}
          marked={activeItem === "Meus Currículos"} // Verifica se é o item ativo
          onClick={() => handleMenuItemClick("Meus Currículos")} // Passa a função para o clique
        />

        <MenuItem
          icon={<FaBell />}
          label="Notificações"
          showExpand={true}
          marked={activeItem === "Notificações"} // Verifica se é o item ativo
          onClick={() => handleMenuItemClick("Notificações")} // Passa a função para o clique
        />

        <MenuItem
          icon={<FaCheckSquare />}
          label="Feedbacks"
          badge="5"
          marked={activeItem === "Feedbacks"} // Verifica se é o item ativo
          onClick={() => handleMenuItemClick("Feedbacks")} // Passa a função para o clique
        />
      </ul>
    </div>
  );
};

export default MenuList;


