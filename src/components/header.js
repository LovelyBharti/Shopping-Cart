import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';
import iconCart from '../assets/iconCart.png'
import './Header.css';

const Header = () => {
    const [totalQuantity, setTotalQuantity] = useState(0);
    const carts = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        setTotalQuantity(carts.reduce((total, item) => total + item.quantity, 0));
    }, [carts]);

    return (
        <header className="header">
            <Link to="/" className="logo">Home.</Link>
            <div className="cart-icon" onClick={() => dispatch(toggleStatusTab())}>
                <img src={iconCart} alt="Cart" />
                {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
            </div>
        </header>
    );
};

export default Header;
