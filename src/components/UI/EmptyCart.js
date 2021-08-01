import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {EMPTY_CART} from '../../theme/images';
import Button from '../../components/button/index';
import style from '../../theme/style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartView: {
    width: '50%',
    marginTop: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  image:{
      width:'40%',
      height:'40%'
  }
});

const EmptyCart = ({navigation}) => {
  return (
    <View style={[styles.container]}>
      <Image source={EMPTY_CART} resizeMode={'contain'} style={[styles.image]} />
      <View style={[styles.cartView]}>
        <Text style={[style.h2, {fontWeight: 'bold', letterSpacing: 0.4}]}>
          Add items to your cart
        </Text>
        <Text style={[style.h2, {color: '#000', opacity: 0.3}]}>
          Enjoy a hassle free checkout
        </Text>

        <Button
          marginTop={10}
          title={'Start shopping'}
          onButtonPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default EmptyCart;
