import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = ({ data }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: data.id, 
            quantity: 1,
            price: data.price,
            name: data.name,
            image: data.image
        }));
    };

    return (
        <div className="product-card">
            <img src={data.image} alt={data.name} />
            <h3>{data.name}</h3>
            <p>${data.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>  
        </div>
    );
};

export default ProductCart;
