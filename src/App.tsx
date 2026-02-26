import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Placement from './Pages/Placement';
import Scholarships from './Pages/Scholarships';
import Sports from './Pages/Sports';
import Transport from './Pages/Transport';
import About from './Pages/About';
import Hostel from './Pages/Hostel';
import BikePage from './Pages/BikePage';
import ThankYou from './Pages/ThankYou';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';
import ScrollToTop from './components/ScrollToTop';
import ClickSpark from './components/ClickSpark';
import InactivityHandler from './components/InactivityHandler';
import RightSideNav from './components/RightSideNav';
import KioskGuard from './components/KioskGuard';
import './App.css';

function App() {
  return (
    <KioskGuard>
      <InactivityHandler timeout={90000} warningDuration={10000} />
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <ScrollToTop />
        <RightSideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/scholarship" element={<Scholarships />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/about" element={<About />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/bike-animation" element={<BikePage />} />
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </ClickSpark>
    </KioskGuard>
  );
}

export default App;

