import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // .tsx extension is assumed in imports
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarsList } from './components/cars/CarsList';
import { CarDetail } from './components/cars/CarDetail';
import { RouteNotFound } from './components/RouteNotFound';
import { Home } from './components/Home';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="cars" element={<CarsList />} />
                    <Route path="cars/:productId" element={<CarDetail />} />
                    <Route path="*" element={<RouteNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
