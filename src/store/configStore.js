import {  createStore, combineReducers  } from 'redux';
import shopReducer  from '../redux/reducers/shop';
import  cartReducer  from '../redux/reducers/cart';
import productReducer from '../redux/reducers/product';
import { composeWithDevTools } from 'redux-devtools-extension';


export  const configStore = ()=>{

const store = createStore(combineReducers({
    shops: shopReducer,
    cart: cartReducer,
    product: productReducer
}), 
);

    return store 

};

