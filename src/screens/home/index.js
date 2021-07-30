import React from 'react'
import HomeScreen from './HomeScreen';
import { connect } from 'react-redux';
import { addShop } from '../../redux/actions/shop';


const index = props => {



    return (
        <HomeScreen {...props}/>
    )
}




const  mapDispatchToProps = (dispatch) =>{
    return {
        addShop : (shops) => dispatch(addShop(shops)) 
    }
}

const mapStateToProps = (state) =>{
    console.log('store\n\n\n---->', state.shops)
    return {
        _shopsList: state.shops
    }
}


export default  connect( mapStateToProps, mapDispatchToProps ) (index)

