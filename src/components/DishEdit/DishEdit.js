import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import {updDishThunkCreator} from "./../../store/dishesReducer";
import './DishEdit.css';
import Preloader from '../Preloader/Preloader';

const DishEdit = (props) => {

  const cancelAddHandler = () => props.history.push("/");

  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  const dishes = useSelector(state => state.dishesReducer.dishes);
  const dishId = props.match.params.dishId;
  
  const [dish, setDish] = useState(...dishes.filter(dish => dish.id === dishId));

  const dishDataChanged = event => {
    const name = event.target.name;
    const value = event.target.value;
    setDish(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const history = useHistory();
 
  const updDishHandler = (event) => {
    event.preventDefault();
    dispatch(updDishThunkCreator(dish, history));
  };

  let dishesDataList; 

  if (loading) {
    dishesDataList = <Preloader />;
  } else {
    dishesDataList = <>
    <div className="ContactData">
      <form className="InputForm">
        <h4>Измените данные по блюду</h4>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Наименование"
          value={dish.name}
          onChange={dishDataChanged}
        />
        <input
          className="Input"
          type="text"
          name="price"
          placeholder="Цена"
          value={dish.price}
          onChange={dishDataChanged}

        />
        <input
          className="Input"
          type="text"
          name="img"
          placeholder="Фото URI"
          value={dish.img}
          onChange={dishDataChanged}
        />
        <img src={dish.img} alt="Preview" className="modal_dish_image" />
        <div className="add_button_wrapper">
          <button className="add_button" onClick={(event) => {updDishHandler(event)}}>Сохранить изменения</button>
          <button className="add_button" onClick={() => {cancelAddHandler()}}>Вернуться в список</button>
        </div>
      </form>
    </div>
  </>;
  };
  return <> 
    {dishesDataList}
  </>
 
};

export default DishEdit;
