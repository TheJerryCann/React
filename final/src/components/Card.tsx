import React, { CSSProperties, ReactNode } from 'react';

interface CardProps {
  style?: CSSProperties;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({ style, children }) => {
  return (
    <div className="card" style={{
      backgroundColor: '#2a475e', 
      border: '1px solid #66c0f4', 
      padding: '20px', 
      borderRadius: '8px', 
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
      display: 'flex',
      flexDirection: 'column', 
      justifyContent: 'space-between',
      alignItems: 'center', 
      margin: '10px', 
      minWidth: '280px', 
      maxWidth: 'calc(33.333% - 20px)', 
      flexGrow: 1, 
      ...style 
    }}>
      {children}
    </div>
  );
};