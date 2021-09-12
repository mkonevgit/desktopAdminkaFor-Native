import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getOrdersActionCreator } from "../../store/ordersReducer";
import Preloader from "../Preloader/Preloader";
import Order from './Order/Order';


const OrdersList = (props) => {

    const dispatch = useDispatch();
    const getOrdersHandler = () => dispatch(getOrdersActionCreator());
    const loading = useSelector(state => state.ordersReducer.loading);
    const orders = useSelector(state => state.ordersReducer.orders);

    useEffect(() => {
        getOrdersHandler();
    }, []);

    let ordersList;

    if (loading) {
        ordersList = <Preloader />;
    } else {
        ordersList = Object.keys(orders).map(key => {
            return <Order key={key} id={key} cart={orders[key].cart} customer={orders[key].customer} />;
        });
    }

    return (
        <>
            {ordersList}
        </>
    );
};

export default OrdersList;