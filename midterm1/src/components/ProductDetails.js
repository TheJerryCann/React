import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useTheme } from './theme';

const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { data: product, loading, error } = useFetch(`http://localhost:3000/products/${productId}`);
    const { theme } = useTheme();
    const detailsStyle = {
        backgroundColor: theme === 'light' ? '#ffffff' : '#212121',
        color: theme === 'light' ? '#000' : '#fff',
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div style={detailsStyle}>
            <button onClick={() => navigate(-1)}>Go Back</button>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
        </div>
    );
};

export default ProductDetails;