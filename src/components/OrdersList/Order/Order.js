import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './Order.css';
import { deleteOrderThunkCreator } from "../../../store/ordersReducer";
import OrderItem from './OrderItem/OrderItem';

const DELIVERY = 300;

const Order = ({ id, cart, customer }) => {

    const dishes = useSelector(state => state.ordersReducer.dishes);
    const dispatch = useDispatch();
    const deleteOrderHandler = (orderId) => dispatch(deleteOrderThunkCreator(orderId));

    let orderItemList;
    let priceTotal = 0;

    orderItemList = cart.map(cartItem => {
        const index = dishes.findIndex(dish => dish.id === cartItem.id);
        priceTotal += cartItem.count * dishes[index].price;
        return <OrderItem key={cartItem.id} id={cartItem.id} name={dishes[index].name} price={dishes[index].price} count={cartItem.count} />
    })

    return (
        <div className="Order">
            <div className="order_title">
                Контакты
            </div>
            <div className="order_title wrapper_font font wrapper_color">
                {"Имя: " + customer.name + ",  адрес: " + customer.address + ",  мобильный: " + customer.phone}
            </div>
            <div className="order_title">
                <div className="order_title_name_wrapper">
                    <p className="order_title_name">
                        Наименование
                    </p>
                </div>
                <p className="order_title_count">
                    Кол.
                </p>
                <p className="order_title_price">
                    Цена
                </p>
            </div>
            {orderItemList}
            <div className="order_title wrapper_font wrapper_color">
                <div className="order_title_name_wrapper">
                    <p className="order_title_name">
                        Доставка
                    </p>
                </div>
                <p className="order_title_count">

                </p>
                <p className="order_title_price">
                    {DELIVERY + " тг."}
                </p>
            </div>
            <div className="order_title wrapper_font">
                <div className="order_title_name_wrapper">
                    <p className="order_title_name">
                        Полная стоимость
                    </p>
                </div>
                <p className="order_title_count">

                </p>
                <p className="order_title_price">
                    {(Number(priceTotal) + Number(DELIVERY)) + " тг."}
                </p>
            </div>

            <div className="order_title wrapper_color">
                <button className="order_button_del"
                    onClick={() => deleteOrderHandler(id)}
                > </button>
            </div>

        </div>


    );
};

export default Order;