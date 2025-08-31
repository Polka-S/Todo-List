import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialIsDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(initialIsDark);
    document.body.setAttribute('data-theme', initialIsDark ? 'dark' : 'light');
  }, [])

  const toggleTheme = () => {
    setIsDark(prevIsDark => {
      const newIsDark = !prevIsDark;
      
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
      document.body.setAttribute('data-theme', newIsDark ? 'dark' : 'light');
      
      return newIsDark;
    });
  }

  const value = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      { children }
    </ThemeContext.Provider>
  );
}