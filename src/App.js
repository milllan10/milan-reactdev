import React, { useState, createContext, useContext } from 'react';
import Header from './components/Header'

// Create a ThemeContext to provide theme information and toggling function
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div className={isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
        <Header />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
