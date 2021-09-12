import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import './ContactData.css';

import { createOrderHandler } from "../../store/ordersReducer";
import { clearCart } from "../../store/cartReducer";
import Preloader from './../Preloader/Preloader';

const ContactData = (props) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const price = useSelector(state => state.cartReducer.totalPrice);
  const loading = useSelector(state => state.ordersReducer.loading);

  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    street: '',
    postal: ''
  });

  const customerDataChanged = event => {
    const name = event.target.name;
    const value = event.target.value;
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const history = useHistory();

  const clearCartHandler = () => {
    dispatch(clearCart());
  }

  const orderHandler = event => {
    event.preventDefault();
    const order = {
      cart: cart,
      // price: price,
      customer: { ...customer }
    };
    dispatch(createOrderHandler(order, history));
  };

  let contactDataList; 

  if (loading) {
    contactDataList = <Preloader />;
  } else {
    contactDataList = <>
    <div className="ContactData">
      <form className="InputForm" onSubmit={orderHandler}>
        <h4>Ведите ваши контактные данные</h4>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={customer.name}
          onChange={customerDataChanged}
        />
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Your Mail"
          value={customer.email}
          onChange={customerDataChanged}

        />
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Street"
          value={customer.street}
          onChange={customerDataChanged}
        />
        <input
          className="Input"
          type="text"
          name="postal"
          placeholder="Postal Code"
          value={customer.postal}
          onChange={customerDataChanged}
        />
        <div className="cart_button_wrapper">
          <button className="cart_button_order" onClick={(event) => {orderHandler(event); clearCartHandler();}}>Разместить заказ</button>
        </div>
      </form>
    </div>
  </>;
  };
  return <> 
    {contactDataList}
  </>
 
};

export default ContactData;
