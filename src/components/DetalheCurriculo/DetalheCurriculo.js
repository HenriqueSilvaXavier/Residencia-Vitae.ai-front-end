import React from 'react';
import styles from './DetalheCurriculo.module.css';
import { useParams } from 'react-router-dom';

const DetalheCurriculo = () => {
    const { id } = useParams();

    return (
        <div style={{ margin: '20px', width: '70%'}}>    
        <div style={{margin: '20px', textAlign: 'left'}}>
          <h1 style={{ color: 'white' }}>Componente - Detalhe Currículo Id : {id}</h1>
        </div>
        <div style={{ width: '60%', margin: '0 auto'}}>  
        </div>
      </div>
  );
};

export default DetalheCurriculo;
