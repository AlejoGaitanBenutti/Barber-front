// App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ScrollAndAnimate() {
  const location = useLocation();

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      once: false,
    });

   
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollAndAnimate /> {/* 👈 Hook para animación y scroll */}
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
