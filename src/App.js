import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Audiovisual from './pages/Audiovisual';
import CienciaDaComputacao from './pages/CienciaDaComputacao';
import Desenhos from './pages/Desenhos';
import Shot from './pages/Shot';
import Contato from './pages/Contato';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/portfolio-gabriel-pastore/home' element={<Home />} />
        <Route path='/portfolio-gabriel-pastore/audiovisual' element={<Audiovisual />} />
        <Route path='/portfolio-gabriel-pastore/ciencia_da_computacao' element={<CienciaDaComputacao />} />
        <Route path='/portfolio-gabriel-pastore/desenhos' element={<Desenhos />} />
        <Route path='/portfolio-gabriel-pastore/shot' element={<Shot />} />
        <Route path='/portfolio-gabriel-pastore/contato' element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
