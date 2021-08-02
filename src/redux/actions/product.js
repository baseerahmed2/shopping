import { ADD_TO_CART, GET_PRODUCT  } from '../constant/index';

export const getAllProduct = (payload) =>{
    return {
        type: GET_PRODUCT,
        payload: payload       
    
    }

}

export const IncreaseQuantity = (payload) =>{
    return {
        type: ADD_TO_CART,
        payload: payload       
    
    }

}


