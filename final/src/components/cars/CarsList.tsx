import React from 'react';
import { useFetchProducts } from '../../hooks/products/useFetchProducts';
import { Spinner } from '../Spinner';
import { CarListRow } from './CarListRow';

export const CarsList: React.FC = () => {
  const { data: products, loading, error } = useFetchProducts();

  if (loading) return <Spinner />;

  if (error) {
    return <p>There was an error</p>;
  }

  return (
      <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'stretch'
      }}>
        {products && products.length > 0 &&
            products.map((product) => (
                <CarListRow key={product.id} product={product} />
            ))}
      </div>
  );
};
