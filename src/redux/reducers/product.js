import { ADD_TO_CART, GET_PRODUCT } from '../constant/index';
import Quantity from './../models/quantity';

const initialState={
    productList:[],

};

export default (state = initialState, action) =>{
   console.log('increase qunaty',action.payload)
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                productList : [...state.productList, action.payload]
            }
        
        case ADD_TO_CART:
            let updatedProductList;
            if(state.productList[action.payload.id]){
                state.productList[action.payload.id].quantity + 1
    
            }else{
                updatedProductList = new Quantity(1);
            }
            return {
                ...state,
                productList: [...state.productList, updatedProductList]     
            
            } 
            
    
        default:
    return state;
    }

}