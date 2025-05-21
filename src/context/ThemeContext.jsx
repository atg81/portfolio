import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Tema context'ini oluştur
export const ThemeContext = createContext();

// 2. Tema sağlayıcısı bileşeni
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // localStorage'dan tema bilgisini al
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Body class'ını güncelle ve localStorage'a yaz
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Tema hook'u
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
