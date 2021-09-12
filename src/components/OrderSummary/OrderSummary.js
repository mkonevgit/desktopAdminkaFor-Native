import React from "react";
import { useSelector } from "react-redux";
import ContactData from "../ContactData/ContactData";
import OrderSummaryItem from "./OrderSummaryItem/OrderSummaryItem";
import "./OrderSummary.css";

const OrderSummary = (props) => {

    const cart = useSelector(state => state.cartReducer.cart);
    const totalPrice = useSelector(state => state.cartReducer.totalPrice);

    let orderSummaryList;


    orderSummaryList = cart.map(cartItem => {
        return <OrderSummaryItem
            key={cartItem.id}
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            img={cartItem.img}
            count={cartItem.count}
        />;
    });

    return (
        <>
            {orderSummaryList}
            <div className="total">
                Итого к оплате:
            <div className="total_price">{totalPrice+" "}<b>KZT</b></div>

            </div>
            <ContactData />
        </>
    );
}

export default OrderSummary;