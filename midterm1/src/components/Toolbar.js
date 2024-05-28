import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './theme';
import MainComponent from './MainComponent';

const Toolbar = () => {
    const { theme, toggleTheme } = useTheme();
    const navStyle = {
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
    };

    return (
        <nav style={navStyle}>
            <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    );
};

export default Toolbar;