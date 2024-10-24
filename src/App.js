import './App.css'; 
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App"> {/* Certifique-se de que a classe está configurada corretamente */}
      <Header />
      <div className="main_flex">
        <Menu />
        <Banner />
      </div>
      {/* Adicione margem superior aos títulos */}
      <div className='curriculosDiv'>
        <p className="curriculosTitulo">Currículos Recentes</p>
        <p className="curriculosTitulo">Currículos Antigos</p>
      </div>
    </div>
  );
}

export default App;
