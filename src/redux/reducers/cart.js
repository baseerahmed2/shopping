import {ADD_TO_CART, CLEAR_CART} from '../constant/index';
import CartItems from './../models/cart-items';
import {REMOVE_FROM_CART} from './../constant/index';

const initialState = {
  items: {},
  totalAmount: 0,
  subTotalCounter: 0,
};

export default (state = initialState, action) => {
  console.log('remove from cart action paylaod', action.payload);
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.payload;
      const name = addedProduct.name;
      const price = addedProduct.price;
      //   check wheter that product is part of cart items or not
      let updatedOrNewCartItem;
      if (state.items[addedProduct.id]) {
        updatedOrNewCartItem = new CartItems(
          state.items[addedProduct.id].quantity + 1,
          name,
          price,
          state.items[addedProduct.id].sum + price,
          state.subTotalCounter + 1,
        );
      } else {
        updatedOrNewCartItem = new CartItems(1, name, price, price);
      }
      return {
        ...state,
        items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + price,
        subTotalCounter: state.subTotalCounter + 1,
      };
    case CLEAR_CART:
      return {
        ...state,
        items: {},
        totalAmount: 0,
        subTotalCounter: 0,
      };
    case REMOVE_FROM_CART:
      const product = action.payload;
      const currentQuantity = state.items[product.id].quantity;
      let updatedCartItems;

      if (currentQuantity > 1) {
        const updatedCartItem = new CartItems(
          currentQuantity - 1,
          state.items[product.id].name,
          state.items[product.id].price,
          state.items[product.id].sum - product.price,
        );
        updatedCartItems = {...state.items, [product.id]: updatedCartItem};

        //  need to reduce it, not erase it
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[product.id];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - product.price,
        subTotalCounter: state.subTotalCounter - 1,
      };

    default:
      return state;
  }
};
