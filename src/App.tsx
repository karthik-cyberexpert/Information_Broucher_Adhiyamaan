import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Placement from './Pages/Placement';
import Scholarships from './Pages/Scholarships';
import Sports from './Pages/Sports';
import Transport from './Pages/Transport';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/placement" element={<Placement />} />
      <Route path="/scholarship" element={<Scholarships />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/transport" element={<Transport />} />
    </Routes>
  );
}

export default App;
