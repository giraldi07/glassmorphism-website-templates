import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { useState, useEffect } from 'react'; // Tambahkan useState dan useEffect
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen'; // Import komponen LoadingScreen

// import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen />} {/* Tampilkan LoadingScreen jika isLoading true */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="team" element={<Team />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}

export default App;