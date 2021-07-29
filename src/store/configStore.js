import {  createStore, combineReducers  } from 'redux';
import {productReducer } from '../redux/reducers/product';
import { cartReducer } from '../redux/reducers/cart';


export  const configStore = ()=>{

const store = createStore(combineReducers({
    product: productReducer,
    cart: cartReducer
}));

    return store 

};

