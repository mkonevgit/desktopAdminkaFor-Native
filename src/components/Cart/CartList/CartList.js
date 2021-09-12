import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./../CartItem/CartItem";
import { addToCart, removeFromCart, clearCart} from "../../../store/cartReducer";
import { setShowOrder } from "../../../store/ordersReducer";
import "./CartList.css";
import Modal from "../../Modal/Modal";
import OrderSummary from "../../OrderSummary/OrderSummary";

const CartList = (props) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart);
    const addToCartHandler = (id, name, price, img) => dispatch(addToCart(id, name, price, img));
    const removeFromCartHandler = (id) => dispatch(removeFromCart(id));
    const clearCartHandler = (id) => dispatch(clearCart());
    const showOrder = useSelector(state => state.ordersReducer.showOrder);
    const setShowOrderModal = (value) => dispatch(setShowOrder(value));

    const getCartCount = () => {
        let Result = 0;
        if (cart.length === 0) {
            return Result;
        } else {
            for (let i = 0; i < cart.length; i++) {
                Result += cart[i].count;
            }
            return Result;
        }
    }


    let cartList;


    cartList = cart.map(cartItem => {
        return <CartItem
            key={cartItem.id}
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            img={cartItem.img}
            count={cartItem.count}
            addToCartHandler={addToCartHandler}
            removeFromCartHandler={removeFromCartHandler}
            clearCartHandler={clearCartHandler}
        />;
    });

    return (
        <>  <div className="cart_title">
            Корзина
            {(getCartCount() > 0) ?
                <div className="cart_button_wrapper">
                    <button className="cart_button_clear cart_button_order" onClick={() => setShowOrderModal(true)}>Оформить заказ</button>
                    <button className="cart_button_clear" onClick={() => clearCartHandler()}>Очистить корзину</button>
                </div> : null
            }
        </div>
            {cartList}
        <Modal
            show={showOrder}
            setShowOrderModal={setShowOrderModal} 
        >
            <OrderSummary/>
        </Modal>
        </>
    );
}

export default CartList;