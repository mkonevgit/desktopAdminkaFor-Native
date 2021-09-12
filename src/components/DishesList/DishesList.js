import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "./../Preloader/Preloader";
import { getDishesHandler, deleteDishThunkCreator  } from "../../store/dishesReducer";
import Dish from "./Dish/Dish";
import { addToCart, removeFromCart, clearCart} from "../../store/cartReducer";

const DishesList = (props) => {

    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishesReducer.dishes);
    const loading = useSelector(state => state.dishesReducer.loading);
    const addToCartHandler = (id, name, price, img) => dispatch(addToCart(id, name, price, img));
    const removeFromCartHandler = (id) => dispatch(removeFromCart(id));
    const deleteDishHandler = (id) => dispatch(deleteDishThunkCreator(id));    
    const clearCartHandler = (id) => dispatch(clearCart());


    useEffect(() => {
        dispatch(getDishesHandler());
    }, []);

    let dishesList;

    const editDishInfoHandler = (id) => {
        props.history.push("/"+id+"/edit");
    };

    dishesList = dishes.map(dish => {
        return <Dish
            key={dish.id}
            id={dish.id}
            name={dish.name}
            price={dish.price}
            img={dish.img}
            addToCartHandler={addToCartHandler}
            removeFromCartHandler={removeFromCartHandler}  
            clearCartHandler={clearCartHandler}     
            deleteDishHandler={() => deleteDishHandler(dish.id)}   
            editClick={() => editDishInfoHandler(dish.id)}  
        />;
    });

    if (loading) {
        dishesList = <Preloader />
    }

    return dishesList;
}

export default DishesList;