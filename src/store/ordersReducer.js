import { ordersAPI } from "../axios/api";
import { dishesAPI } from "../axios/api";

export const SET_ORDERS = "SET_ORDERS";
export const DELETE_ORDER = "DELETE_ORDER";
export const SET_DISHES = "SET_DISHES";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_SHOW_ORDER = 'SET_SHOW_ORDER';
export const INIT_ORDERS = 'INIT_ORDERS';


export const initOrders = () => ({ type: INIT_ORDERS });
export const setOrders = (orders) => ({ type: SET_ORDERS, orders });
export const setDishes = (dishes) => ({ type: SET_DISHES, dishes });
export const deleteOrder = (id) => ({ type: DELETE_ORDER, id });
export const setLoading = (loading) => ({ type: SET_LOADING, loading });
export const setError = (error) => ({ type: SET_ERROR, error });
export const setShowOrder = (showOrder) => ({ type: SET_SHOW_ORDER, showOrder });


export const getOrdersActionCreator = () => {
    return async dispatch => {
        let response;
        try {
            dispatch(setLoading(true));

            response = await dishesAPI.getDishes();
            const keys = Object.keys(response);
            let dishes = [];
            keys.forEach((key) => {
                dishes.push({ id: key, name: response[key].name, img: response[key].img, price: response[key].price })
            });

            response = await ordersAPI.getOrders();
            dispatch(setDishes(dishes));
            dispatch(setOrders(response));
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoading(false));
        }
    };
};

export const deleteOrderThunkCreator = (orderId) => {
    return async dispatch => {
        try {
            dispatch(setLoading(true));
            let response = await ordersAPI.deleteOrder(orderId);
            dispatch(deleteOrder(orderId));
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(setLoading(false));
        }
    }
}


const initialState = {
    orders: [],
    dishes: [],
    loading: false,
    error: null,
    showOrder: false
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.orders
            };
        case SET_DISHES:
            return {
                ...state,
                dishes: action.dishes
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        case SET_SHOW_ORDER:
            return {
                ...state,
                showOrder: action.showOrder
            };
        case INIT_ORDERS:
            return {
                ...initialState
            };
        case DELETE_ORDER:
        {
            const stateCopy = {...state};
            delete stateCopy.orders[action.id];
            return stateCopy;
        }
        default:
            return state;
    }



};

export default ordersReducer;