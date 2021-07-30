

import { ADD_SHOPS } from '../constant/index';

const initialState =[]

export default ( state = initialState, action ) =>{
 switch (action.type) {
     case ADD_SHOPS:
     return [...state, ...action.payload]
     default:
         return state
 }

}