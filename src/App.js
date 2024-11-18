import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import NovoCurriculo from './components/NovoCurriculo/NovoCurriculo';
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
      </div>
    </Router>
  );
}

export default App;
