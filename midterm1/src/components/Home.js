import React from 'react';
import { useTheme } from './theme';

const Home = () => {
    const { theme } = useTheme();
    const style = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#212121',
        color: theme === 'light' ? '#000000' : '#ffffff',
    };

    return (
        <div style={style}>
            <h1>Welcome to our Home Page!</h1>
            <p>This is your home page where you can find all the latest updates.</p>
        </div>
    );
};

export default Home;