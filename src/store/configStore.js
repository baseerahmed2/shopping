import {  createStore, combineReducers  } from 'redux';
import shopReducer  from '../redux/reducers/shop';
import  cartReducer  from '../redux/reducers/cart';
import { composeWithDevTools } from 'redux-devtools-extension';


export  const configStore = ()=>{

const store = createStore(combineReducers({
    shops: shopReducer,
    cart: cartReducer
}), 
composeWithDevTools()
);

    return store 

};

