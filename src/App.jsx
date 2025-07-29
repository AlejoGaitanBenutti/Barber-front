import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home/Home'; // NUEVO: agrupás toda la landing en un solo componente
import Shop from './pages/Shop/Shop';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
  AOS.init({
    duration: 800, // duración por defecto de las animaciones
    once: true,    // animar solo una vez
  });
}, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
