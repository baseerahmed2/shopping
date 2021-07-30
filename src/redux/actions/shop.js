import { ADD_SHOPS } from '../constant/index';

export const addShop = (payload) =>{
    return {
        type: ADD_SHOPS,
        payload: payload       
    
    }

}