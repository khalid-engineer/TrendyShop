import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail'; // ✅ added this

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} />
        <Route path="/features" element={isLoggedIn ? <Features /> : <Navigate to="/login" />} />
        <Route path="/product/:id" element={isLoggedIn ? <ProductDetail /> : <Navigate to="/login" />} /> {/* ✅ added route */}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
