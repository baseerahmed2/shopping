import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ToastAndroid } from 'react-native';
import Header from '../../components/header/index';
import Item from '../../components/product/Item';
import styles from './style';
import commonStyle from '../../theme/style';
import {product} from '../../utils/StaticContent';


const ProductHomeScreen = ({
  navigation,
  addToCart,
  removeFromCart,
  getAllProduct,
  productList,
  IncreaseQuantity,
}) => {
    
  // function IncreaseCartQuantity(id) {
  //   IncreaseQuantity(id);
  // }

  function addItemToCart(product) {
    addToCart(product);
  }
  // function removeItemFromCart(product) {
  //   removeFromCart(product);
  // }

  useEffect(() => {
    getAllProduct(product);
  }, [productList]);

  return (
    <View style={[styles.container]}>
      <Header title={'shop name'} goback search navigation={navigation} />
      <View style={[styles.innerContainer]}>
        <Text
          style={[
            commonStyle.h2,
            {alignSelf: 'flex-start', paddingTop: 20, paddingHorizontal: 20},
          ]}>
          Category name
        </Text>

        {/* add filter view here */}
        <View style={{flex: 1, paddingTop: 10}}>
          <FlatList
            key={'1'}
            numColumns={2}
            data={productList}
            renderItem={({item}) => (
              <Item
                {...item}
                // IncreaseCartQuantity={IncreaseCartQuantity}
                // removeItemFromCart={removeItemFromCart}
                addItemToCart={addItemToCart}
                navigation={navigation}
              />
            )}
            keyExtractor={id => id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductHomeScreen;
