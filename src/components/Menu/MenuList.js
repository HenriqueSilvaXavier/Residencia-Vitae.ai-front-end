import React from 'react';
import { FaHome, FaPlus, FaFileAlt, FaBell, FaCheckSquare } from 'react-icons/fa';
import MenuItem from './MenuItem';
import styles from './MenuList.module.css';

const MenuList = () => {
  return (
    <ul className={styles.menuList}>
      <MenuItem icon={<FaHome />} label="Início" marked="true"/>
      <MenuItem icon={<FaPlus />} label="Novo Currículo" />
      <MenuItem icon={<FaFileAlt />} label="Meus Currículos" />
      <MenuItem icon={<FaBell />} label="Notificações" />
      <MenuItem icon={<FaCheckSquare />} label="Feedbacks" badge="5" />
    </ul>
  );
};

export default MenuList;

