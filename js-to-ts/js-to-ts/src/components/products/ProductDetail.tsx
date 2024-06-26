import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchProduct } from '../../hooks/products/useFetchProduct';
import { Spinner } from '../Spinner';
import { Card } from '../Card';

// Define types for useParams and the product data structure if it's not globally defined
interface Product {
    title: string;
    image: string;
    category: string;
    description: string;
}

export const ProductDetail: React.FC = () => {
    const navigate = useNavigate();
    const { productId } = useParams<{ productId: string }>();
    const { data: product, loading, error } = useFetchProduct(productId);

    const handleGoBackClick = () => {
        navigate('/products');
    };

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <p>There was an error</p>;
    }

    return (
        <Card>
            <div className="product-detail-container">
                {product && (
                    <>
                        <img
                            style={{ flex: 1 }}
                            width={250}
                            alt={product.title}
                            src={product.image}
                        />
                        <div className="product-details">
                            <strong>{product.title}</strong>
                            <p>{product.category}</p>
                            <p>{product.description}</p>
                        </div>
                    </>
                )}
            </div>
            <button
                style={{ alignItems: 'flex-end', marginTop: '15px' }}
                onClick={handleGoBackClick}
            >
                Go back
            </button>
        </Card>
    );
};
