import React from 'react'
import HomeScreen from './HomeScreen';
import { connect } from 'react-redux';
import { addShop } from '../../redux/actions/shop';
import { Text, View } from 'react-native';


const Index = props => {



    return (
        <HomeScreen {...props}/>
    )
}

Index.navigationOptions={
    title:'',
    tabBarIcon: ({focused, activeColor, })=>{
        return ( 
            <View style={{ width:40, alignItems:'center', justifyContent:'center'}}>
              <Text style={{color:"#F54F22", borderRadius:50,textAlign:'center', width:20, height:13, position:'absolute',top:-2, fontSize:10, backgroundColor:'#F9BD0A', elevation:3, right:0 }}>{'2'}</Text>
            </View>
           
        )
    }
 }

// index.navigationOptions={
//     title:'',
//     tabBarIcon: ({focused, activeColor, })=>{
//         return ( 
//             <View style={{ width:40, alignItems:'center', justifyContent:'center'}}>
//               <Text style={{color:"#F54F22", borderRadius:50,textAlign:'center', width:20, height:13, position:'absolute',top:-2, fontSize:10, backgroundColor:'#F9BD0A', elevation:3, right:0 }}>{'2'}</Text>
//               <Image source={CART} style={{width:50, height:50,  }}/>
//             </View>
           
//         )
//     }
//  }



const  mapDispatchToProps = (dispatch) =>{
    return {
        addShop : (shops) => dispatch(addShop(shops)) 
    }
}

const mapStateToProps = (state) =>{
    return {
        _shopsList: state.shops,
        totalInCart: state.cart.subTotalCounter
    }
}


export default  connect( mapStateToProps, mapDispatchToProps ) (Index)

