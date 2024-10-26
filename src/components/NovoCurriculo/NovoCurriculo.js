import React, { useState } from 'react';
import ProgressBar from '../NovoCurriculo/tab_controlls.svg'; // Caminho correto
import File from '../NovoCurriculo/add_task.svg'; // Caminho correto
import UploadFile from '../NovoCurriculo/add_task2.svg'; // Caminho correto
import styles from './NovoCurriculo.module.css'


const NovoCurriculo = () => {
  const [currentFile, setCurrentFile] = useState(File);
  const [key, setKey] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false); // Novo estado

  const handleClick = () => {
    setCurrentFile(UploadFile);
    setKey(prevKey => prevKey + 1);
    setIsButtonVisible(true); // Torna o botão visível
  };

  return (
    <div style={{margin: '20px', width: '70%' }}>
      <div style={{ margin: '20px', textAlign: 'left' }}>
        <h1 style={{ color: 'white' }}>Novo Currículo</h1>
        <p style={{ color: 'white' }}>Siga o passo a passo para otimizar o seu currículo</p>
      </div>
      <div style={{  width: '60%', margin: '0 auto' }}>
        <img src={ProgressBar} alt="Logo" />
        <p style={{ color: 'white', textAlign: 'left', marginTop: -20 }}>1. Importar</p>

        <img key={key} style={{ cursor: 'pointer' }} src={currentFile} alt="Logo" onClick={handleClick} />

      </div>

      {isButtonVisible && (
        <div className={styles.main_container_proximo_btn}>
          <button className={styles.proximo_btn}>Próximo</button>
        </div>
      )}
    </div>
  );
};

export default NovoCurriculo;
