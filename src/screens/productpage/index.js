import React from 'react'
import ProductHomeScreen from './ProductHomeScreen';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from './../../redux/actions/cart';
import { getAllProduct, IncreaseQuantity } from './../../redux/actions/product';

const index = (props) => {
    return (
       <ProductHomeScreen {...props}/>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllProduct: (product)=>dispatch(getAllProduct(product)),
        IncreaseQuantity: (id)=>dispatch(IncreaseQuantity(id)),
        addToCart: (product) => dispatch(addToCart(product)),
        removeFromCart : (product) =>dispatch(removeFromCart(product)),

    }
}

const mapStateToProps =(store) =>{

     return {
        productList: store.product.productList[0],
     }

 }



export default connect(mapStateToProps, mapDispatchToProps) (index)
