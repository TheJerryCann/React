import React from 'react';

interface Props {
    description: string;
    price: number;
    image: string;
    width?: number; // Make width optional since it has a default value
}

export const Thumbnail: React.FC<Props> = ({ description, price, image, }) => {
    return (
        <div className="">
            <img alt={description} src={image}  />
        </div>
    );
};
