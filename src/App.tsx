import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Placement from './Pages/Placement';
import Scholarships from './Pages/Scholarships';
import Sports from './Pages/Sports';
import Transport from './Pages/Transport';
import About from './Pages/About';
import Hostel from './Pages/Hostel';
import ScrollToTop from './components/ScrollToTop';
import ClickSpark from './components/ClickSpark';
import './App.css';

function App() {
  return (
    <>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/scholarship" element={<Scholarships />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/about" element={<About />} />
          <Route path="/hostel" element={<Hostel />} />
        </Routes>
      </ClickSpark>
    </>
  );
}

export default App;

