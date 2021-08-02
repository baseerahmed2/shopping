import React from 'react'
import CheckOutScreen from './CheckOutScreen'
import { connect } from 'react-redux';



const index = (props) => {
    return (
       <CheckOutScreen {...props} />
    )
}


const mapStateToProps =(store) =>{

    const transformCartItem = []
 for (let key in store.cart.items ) {
    transformCartItem.push({
       id: key,
       price: store.cart.items[key].price,
       name: store.cart.items[key].name,
       quantity: store.cart.items[key].quantity,
       sum : store.cart.items[key].sum
 
    })
 }
     return {
        cartItems: transformCartItem,
        totalAmount: store.cart.totalAmount,
        subTotalCounter: store.cart.subTotalCounter
     }
 }
 

export default connect(mapStateToProps, undefined)(index) 
