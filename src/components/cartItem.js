import React, { useState, useEffect } from 'react';
import { products } from '../products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import './CartItem.css';

const CartItem = (props) => {
    const { productId, quantity } = props.data;
    const [detail, setDetail] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const findDetail = products.find(product => product.id === productId);
        setDetail(findDetail);
    }, [productId]);

    if (!detail) return null;

    return (
        <div className="cart-item">
            <img src={detail.image} alt={detail.name} />
            <h3>{detail.name}</h3>
            <p>${(detail.price * quantity).toFixed(2)}</p>
            <div className="quantity-control">
                <button onClick={() => dispatch(changeQuantity({ productId, quantity: quantity - 1 }))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => dispatch(changeQuantity({ productId, quantity: quantity + 1 }))}>+</button>
            </div>
        </div>
    );
};

export default CartItem;
