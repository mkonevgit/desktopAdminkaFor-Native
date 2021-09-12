import React from 'react';
import './OrderItem.css';

const OrderItem = ({ id, name, price, count }) => {

    return (
        <div className="OrderItem">
            <div className="order_item_name_wrapper">
                <p className="order_item_name">
                    {name}
                </p>
            </div>
            <p className="order_item_count">
                {count}
            </p>
            <p className="order_item_price">
                {price}
            </p>
        </div>
    );
};

export default OrderItem;