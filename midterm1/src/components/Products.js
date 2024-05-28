import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useTheme } from './theme';

const Products = () => {
    const { data: products, loading, error } = useFetch('http://localhost:3000/products');
    const { theme } = useTheme();
    const productStyle = {
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#424242',
        color: theme === 'light' ? '#000' : '#fff',
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div style={productStyle}>
            {products.map(product => (
                <Link key={product.id} to={`/products/${product.id}`}>
                    <div>
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Products;