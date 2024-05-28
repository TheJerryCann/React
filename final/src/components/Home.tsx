import React from 'react';

export const Home: React.FC = () => {
    return (
        <div style={homeStyle}>
            <h1>Welcome to Our Homepage</h1>
            <img src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/TKYWNY3VXJA3LNE36HZZBTE4EI.jpg?auth=f38be9997c418d79784a4f5ad9a09d0b1ab511f2542ae21811f8f04ba140efa3&height=934&quality=40" alt="Featured Home" style={imageStyle} />
        </div>
    );
};

// Styles
const homeStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    color: '#c6d4df',
    backgroundColor: '#171a21',
    textAlign: 'center',
    padding: '20px'
};

const imageStyle: React.CSSProperties = {
    maxWidth: '80%',
    height: 'auto',
    margin: '20px 0'
};