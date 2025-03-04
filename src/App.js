import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Audiovisual from './pages/Audiovisual';
import CienciaDaComputacao from './pages/CienciaDaComputacao';
import Desenhos from './pages/Desenhos';
import Contato from './pages/Contato';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
        {/*<Route path='/audiovisual' element={<Audiovisual />} />
        <Route path='/ciencia_da_computacao' element={<CienciaDaComputacao />} />
        <Route path='/desenhos' element={<Desenhos />} />
        <Route path='/contato' element={<Contato />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
