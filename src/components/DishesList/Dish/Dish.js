import React from "react";
import "./Dish.css";


const Dish = (props) => {
    return (
        <div className="Dish">
            <div className="image_wrapper">
                <img src={props.img} alt="" className="dish_image" />   
            </div>
                    <div className="text_element_wrapper" onClick={props.editClick}>
                <p className="dish_name">
                    {props.name}
                </p>

            </div>

            <div className="price_wrapper">
                <div className="dish_button_wrapper">
                    <button className="dish_button_add dish_button_del" 
                        onClick={() => props.deleteDishHandler(props.id)}
                    > </button>
                    <button className="dish_button_add dish_button_edit" onClick={props.editClick}></button>
                </div>
                <p className="dish_price">
                        {props.price} <b>KZT</b>
                </p>               
            </div>

        </div>
    );
};

export default Dish;