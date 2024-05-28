import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toolbar from './components/Toolbar.js';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import { ThemeProvider } from './components/theme.js';
import MainComponent from './components/MainComponent';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Toolbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:productId" element={<ProductDetails />} />
                    <Route path="/main-program" element={<MainComponent />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;