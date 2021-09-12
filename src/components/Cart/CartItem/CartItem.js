import React from "react";
import "./CartItem.css";


const CartItem = (props) => {

    return (
        <div className="Cart">
            <img src={props.img} alt="" className="cart_image" />
            <div className="cart_text_element_wrapper">
                <p className="cart_name">
                    {props.name}
                </p>
                <p className="cart_price">
                    {props.price} <b>KZT</b>
                </p>
            </div>
            <div className="cart_button_add_wrapper">
                <button className="cart_button_add" onClick={() => props.addToCartHandler(props.id, props.name, props.price, props.img)}></button>
                <div className="cart_count">{props.count}</div>
                <button className="cart_button_add cart_button_remove" onClick={() => props.removeFromCartHandler(props.id)}></button>
                
            </div>
        </div>
    );
};

export default CartItem;