import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Toolbar from './components/Toolbar.js';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

function App() {
    return (
        <Router>
            <Toolbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<ProductDetails />} />
            </Routes>
        </Router>
    );
}

export default App;