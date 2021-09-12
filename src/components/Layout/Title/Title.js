import React from "react";
import "./Title.css";
import { withRouter } from "react-router-dom";

const Title = (props) => {

  const showDishesList = () => props.history.push("/");
  const showOrdersList = () => props.history.push("/orders");
  const showDishAdd = () => props.history.push("/add");

  return (
    <div className="Title">
      <button className="title_button" onClick={showDishesList}>Список блюд</button>
      <div className="title_button_wrapper">
        <button className="title_button" onClick={showOrdersList}>Заказы</button>
        <button className="title_button title_dish_button_add" onClick={showDishAdd}>Добавить блюдо</button>        
      </div>
    </div>
  );
};

export default withRouter(Title);