import React, { useState } from 'react';
import ProgressBar from '../../imagens/progress-bar.svg';
import BeforeUploadFile from '../../imagens/before-upload-file.svg';
import AfterUploadFile from '../../imagens/after-upload-file.svg';
import AfterErrorFile from '../../imagens/after-error-file.svg';
import styles from './NovoCurriculo.module.css';
import successIcon from '../../imagens/successIcon.svg';
import errorIcon from '../../imagens/ErroIcon.svg';

const NovoCurriculo = () => {
  const [currentFile, setCurrentFile] = useState(BeforeUploadFile);
  const [fileName, setFileName] = useState("");
  const [key, setKey] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setCurrentFile(AfterUploadFile);
        setFileName(file.name);
        setIsButtonVisible(true);
        setShowSuccessNotification(true); // Exibe a notificação de sucesso
      };
      reader.onerror = () => {
        setCurrentFile(AfterErrorFile);
        setFileName("");
        setShowErrorNotification(true); // Exibe a notificação de erro
      };
      reader.readAsDataURL(file);
    } else {
      setCurrentFile(AfterErrorFile);
      setFileName("");
      setShowErrorNotification(true); // Exibe a notificação de erro quando não é uma imagem
    }
    setKey((prevKey) => prevKey + 1);
  };
  
  const handleCloseNotification = () => {
    setShowSuccessNotification(false);
  };
  const handleCloseError = () => {
    setShowErrorNotification(false);
  };

  return (
    <div style={{ margin: '20px', width: '70%' }}>
      {showSuccessNotification ? (
        <div className={styles.notification}>
          <img
            key={key}
            style={{ cursor: 'pointer', margin: '20px' }}
            src={successIcon}
            alt="Símbolo de sucesso"
          />
          <span>Sucesso. Currículo importado com sucesso.</span>
          <span className={styles.notificationClose} onClick={handleCloseNotification}>
            X
          </span>
        </div>
      ) : showErrorNotification ? (
        <div className={styles.notificationError}>
          <img
            key={key}
            style={{ cursor: 'pointer', margin: '20px' }}
            src={errorIcon}
            alt="Símbolo de erro"
          />
          <span>Erro! Algo deu errado. Tente novamente.</span> {/* Alterado para mensagem de erro apropriada */}
          <span className={styles.notificationClose} onClick={handleCloseError}>
            X
          </span>
        </div>
      ) : null}  {/* Adicionando um retorno nulo para quando nenhuma notificação está a ser exibida */}


      <div style={{ margin: '20px', textAlign: 'left' }}>
        <h1 style={{ color: 'white' }}>Novo Currículo</h1>
        <p style={{ color: 'white' }}>Siga o passo a passo para otimizar o seu currículo</p>
      </div>
      
      <div style={{ width: '60%', margin: '0 auto' }}>
        <img src={ProgressBar} alt="Progresso" />
        <p style={{ color: 'white', textAlign: 'left', marginTop: 5 }}>1. Importar</p>

        <label htmlFor="fileInput">
          <img
            key={key}
            style={{ cursor: 'pointer', margin: '50px' }}
            src={currentFile}
            alt="Imagem de Upload"
          />
        </label>
        <input
          id="fileInput"
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />

        {fileName && (
          <p className={styles.FileName} style={{ color: 'white', textAlign: 'center', marginTop: '10px', fontSize: '2em' }}>{fileName}</p>
        )}
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
