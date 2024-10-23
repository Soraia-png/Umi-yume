import './App.css';
import Header from './components/header/Header.tsx';
import Members from './pages/Members.tsx';
import Contato from './pages/Contato.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div
        className="min-h-screen flex flex-col w-full h-full bg-[url('./assets/Imagens/Backgroud.gif')]"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover', // ou 'contain', dependendo do efeito desejado
          backgroundPosition: 'center', // para centralizar a imagem
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Members" element={<Members />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
