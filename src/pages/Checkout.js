import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const location = useLocation();
    const orderDetails = location.state;

    if (!orderDetails || !orderDetails.items) {
        return <h2>No order details found.</h2>;
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <ul>
                {orderDetails.items.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
                    </li>
                ))}
            </ul>
            <h3>Total: ${orderDetails.totalAmount.toFixed(2)}</h3>
            <p>Estimated Delivery: {orderDetails.deliveryDate}</p>
            <button>Confirm Order</button>
        </div>
    );
};

export default Checkout;
