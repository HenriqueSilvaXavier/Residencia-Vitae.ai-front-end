import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa o React Router
import './App.css'; 
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import NovoCurriculo from './components/NovoCurriculo/NovoCurriculo'; // Importa o componente NovoCurriculo
import DetalheCurriculo from './components/DetalheCurriculo/DetalheCurriculo';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main_flex">
          <Menu />
          <Routes>
            <Route path="/" element={<Banner />} /> 
            <Route path="/novo-curriculo" element={<NovoCurriculo />} /> 
            <Route path="/detalhe-curriculo/:id" element={<DetalheCurriculo />} /> 
          </Routes>
        </div>

        {/* <div className='curriculosDiv'>
          <p className="curriculosTitulo">Currículos Recentes</p>
          <p className="curriculosTitulo">Currículos Antigos</p>
        </div> */}

      </div>
    </Router>
  );
}

export default App;
