import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './cartItem'
import { toggleStatusTab } from '../stores/cart';

const CartTab = () => {
    const carts = useSelector(store => store.cart.items);
    const statusTab = useSelector(store => store.cart.statusTab);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (carts.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // (fixing price calculation)
        const totalAmount = carts.reduce((total, item) => total + item.quantity * item.price, 0);

        const orderDetails = {
            orderId: Math.floor(Math.random() * 1000000),
            items: carts,
            totalAmount,
            deliveryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString()
        };

        dispatch(toggleStatusTab()); // Close sidebar
        navigate("/order-confirmation", { state: orderDetails });
    };

    return (
        <div className={`cart-sidebar ${statusTab ? 'open' : ''}`}>
            <h2 className="cart-header">Shopping Cart</h2>
            <div className="cart-items-container">
                {carts.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    carts.map((item, key) => <CartItem key={key} data={item} />)
                )}
            </div>
            <div className="cart-footer">
                <button className="close-btn" onClick={() => dispatch(toggleStatusTab())}>Close</button>
                <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};

export default CartTab;
