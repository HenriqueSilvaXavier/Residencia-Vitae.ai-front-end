import React from 'react';
import { FaHome, FaPlus, FaFileAlt, FaBell, FaCheckSquare } from 'react-icons/fa';
import MenuItem from './MenuItem';
import styles from './MenuList.module.css';
import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <ul className={styles.menuList}>

      <Link to="/" >
        <MenuItem icon={<FaHome />} label="Início" marked="true"/>
      </Link>
    
      <Link to="/novo-curriculo">
        <MenuItem icon={<FaPlus />} label="Novo Currículo"/>
      </Link>      
      
      <MenuItem icon={<FaFileAlt />} label="Meus Currículos" />
      <MenuItem icon={<FaBell />} label="Notificações" />
      <MenuItem icon={<FaCheckSquare />} label="Feedbacks" badge="5" />
    </ul>
  );
};

export default MenuList;

