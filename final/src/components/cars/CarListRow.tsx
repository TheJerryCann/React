import React from 'react';
import { Card } from '../Card';
import { Thumbnail } from '../Thumbnail';
import { Link } from 'react-router-dom';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

interface Rating {
    rate: number;
    count: number;
}

interface Props {
    product: Product;
}

export const CarListRow: React.FC<Props> = ({ product }) => {
    return (
        <Card style={{
            width: '30%', 
            margin: '1%',  
            minHeight: '250px', 
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'space-between' 
        }}>
            <Thumbnail price={product.price} description={product.description} image={product.image} />
            <div style={{ padding: '10px' }}>
                <Link to={`/cars/${product.id}`} style={{ fontSize: '20px', color: '#c6d4df', textDecoration: 'none' }}>
                    {product.title}
                </Link>
                <p>${product.price}</p>
            </div>
        </Card>
    );
}