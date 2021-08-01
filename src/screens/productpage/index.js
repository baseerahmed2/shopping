import React from 'react'
import ProductHomeScreen from './ProductHomeScreen';
import { connect } from 'react-redux';
import { addToCart } from './../../redux/actions/cart';

const index = (props) => {
    return (
       <ProductHomeScreen {...props}/>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addToCart: (product) => dispatch(addToCart(product))
    }
}



export default connect(undefined, mapDispatchToProps) (index)
