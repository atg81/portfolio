import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// AOS için gerekli importlar 👇
import AOS from 'aos';
import 'aos/dist/aos.css';

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 800, // animasyon süresi (ms)
      once: true,    // sadece bir kez animasyon
    });
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
