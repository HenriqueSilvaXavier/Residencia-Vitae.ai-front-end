import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import Cadastro from './components/Cadastro/Cadastro';
import Login from './components/Login/Login';
import NovoCurriculo from './components/NovoCurriculo/NovoCurriculo';
import DetalheCurriculo from './components/DetalheCurriculo/DetalheCurriculo';
import { AuthProvider, useAuth } from './components/AuthContext';
import Outlet from './components/Outlet';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rota de Login fora do main_flex */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastro />} />
          {/* Rotas protegidas */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Banner />} />
            <Route path="/novo-curriculo" element={<NovoCurriculo />} />
            <Route path="/detalhe-curriculo/:id" element={<DetalheCurriculo />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function ProtectedRoutes() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="App">
      <Header />
      <div className="main_flex">
        <Menu />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
