import React from 'react';
import { useTheme } from './theme';

const MainComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === 'light' ? '#ffffff' : '#212121',
        color: theme === 'light' ? '#000000' : '#ffffff',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <h1>Theme Toggle</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default MainComponent;