import { ADD_TO_CART, CLEAR_CART,REMOVE_FROM_CART  } from '../constant/index';

export const addToCart = (payload) =>{
    return {
        type: ADD_TO_CART,
        payload: payload       
    
    }

}

export const removeFromCart = (payload) =>{
    return {
        type: REMOVE_FROM_CART,
        payload: payload       
    
    }

}


export const clearCartAction = () =>{
 return {
     type: CLEAR_CART,

 }
}

