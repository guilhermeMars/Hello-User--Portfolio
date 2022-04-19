import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contato from './components/Contato';
import { GlobalStyle } from './components/GlobalStyle';
import Header from './components/Header';
import Home from './components/Main/Home';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos/Servicos';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import PoliticaDePrivacidade from './components/PoliticaDePrivacidade';
import TermosDeUso from './components/TermosDeUso';
import OQueE from './components/OQueE';
import GuilhermeMars from './components/guilhermeMars';
import Documentacao from './components/Documentacao';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/servicos' element={<Servicos/>}/>
        <Route path='/localizacao' element={<Localizacao/>}/>
        <Route path='/politicadeprivacidade' element={<PoliticaDePrivacidade/>}/>
        <Route path='/termosdeuso' element={<TermosDeUso/>}/>
        <Route path='/oque' element={<OQueE/>}/>
        <Route path='/guilhermemars' element={<GuilhermeMars/>}/>
        <Route path='/documentacao' element={<Documentacao/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
