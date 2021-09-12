import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import dishesReducer from "./store/dishesReducer";
import cartReducer from "./store/cartReducer";
import ordersReducer from "./store/ordersReducer";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

const rootReducer = combineReducers({
  dishesReducer: dishesReducer,
  cartReducer: cartReducer,
  ordersReducer: ordersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
