import React from 'react';
import ProgressBar from '../NovoCurriculo/tab_controlls.svg'; // Caminho correto
import UploadFile from '../NovoCurriculo/add_task.svg'; // Caminho correto

const NovoCurriculo = () => {
  const handleClick = () => {
    alert('Imagem foi clicada!');
    // Ou redirecionar para uma página, por exemplo:
    // window.location.href = 'https://www.exemplo.com';
  };

  return (
    <div style={{border: '2px solid red', margin: '20px', width: '70%'}}>    
      <div style={{border: '2px solid red', margin: '20px', textAlign: 'left'}}>
        <h1 style={{ color: 'white' }}>Novo Currículo</h1>
        <p  style={{ color: 'white'}}>Siga o passo a passo para otimizar o seu currículo</p>
      </div>
      <div style={{border: '2px solid red', width: '60%', margin: '0 auto'}}>
        <img src={ProgressBar} alt="Logo" />
        <p style={{ color: 'white', textAlign: 'left' }}>1. Importar</p>

        <img  style={{ cursor: 'pointer' }} src={UploadFile} alt="Logo" onClick={handleClick}/>

      </div>
    </div>
  );
};

export default NovoCurriculo;
