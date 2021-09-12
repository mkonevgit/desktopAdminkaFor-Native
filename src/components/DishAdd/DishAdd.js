import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import {addDishThunkCreator} from "./../../store/dishesReducer";
import './DishAdd.css';
import Preloader from '../Preloader/Preloader';

const DishAdd = (props) => {

  const cancelAddHandler = () => props.history.push("/");

  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);
  
  const [dish, setDish] = useState({
    name: '',
    price: '',
    img: ''
  });

  const dishDataChanged = event => {
    const name = event.target.name;
    const value = event.target.value;
    setDish(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const history = useHistory();
 
  const addDishHandler = (event) => {
    event.preventDefault();
    dispatch(addDishThunkCreator(dish, history));
  };

  let dishesDataList; 

  if (loading) {
    dishesDataList = <Preloader />;
  } else {
    dishesDataList = <>
    <div className="ContactData">
      <form className="InputForm">
        <h4>Ведите новое блюдо</h4>
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
          <button className="add_button" onClick={(event) => {addDishHandler(event)}}>Сохранить изменения</button>
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

export default DishAdd;
