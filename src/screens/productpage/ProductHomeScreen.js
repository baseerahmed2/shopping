import React from 'react'
import { View, Text, FlatList } from 'react-native';
import Header from '../../components/header/index';
import Item from '../../components/product/Item';
import styles from './style';
import commonStyle from '../../theme/style';
import {product } from '../../utils/StaticContent'; 
import Button from '../../components/button/index';


const ProductHomeScreen = ({navigation, addToCart}) => {
 const addItemToCart = (product) =>{
    addToCart(product)
 }

    return (
        <View style={[styles.container]}>
            <Header  title={'shop name'}  goback search  navigation={navigation} />
             {/* <Button color={'red'} onButtonPress={()=>{}} title={'addtocart'}/> */}
            <View style={[styles.innerContainer]}>
            <Text style={[commonStyle.h2, {alignSelf:'flex-start', paddingTop:20, paddingHorizontal:20 } ]}>Category name</Text>
              
              {/* add filter view here */}
              <View style={{flex:1, paddingTop:10}}>

              <FlatList
              key={'1'}
               numColumns={2}
               data={product}
               renderItem={({item})=> <Item {...item} addItemToCart={addItemToCart} navigation={navigation} />}
               keyExtractor={(id)=>id.toString()}
               showsVerticalScrollIndicator={false}
              /> 
              </View>

            </View>
        </View>
    )
}

export default ProductHomeScreen
