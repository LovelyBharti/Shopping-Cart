import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const OrderConfirmation = () => {
    const location = useLocation();
    const orderDetails = location.state || {};

    return (
        <div className="order-confirmation-container">
            <h1>🎉 Order Confirmed!</h1>
            <p>Thank you for your purchase. Your order number is <strong>#{orderDetails.orderId}</strong></p>

            <h2>Order Summary</h2>
            <ul>
                {orderDetails.items?.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
                    </li>
                ))}
            </ul>
            
            <p><strong>Total:</strong> ${orderDetails.totalAmount}</p>
            <p><strong>Expected Delivery:</strong> {orderDetails.deliveryDate}</p>

            <button onClick={() => window.print()} className="download-invoice-btn">Download Invoice</button>
            <Link to="/" className="back-home-btn">Continue Shopping</Link>
        </div>
    );
};

export default OrderConfirmation;
