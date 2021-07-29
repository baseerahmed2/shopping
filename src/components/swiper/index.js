import React, { Component } from 'react'
import {  Image, Text, View } from 'react-native'
import styles from './style';
import Swiper from 'react-native-swiper'
 

 
const SwiperComponent = ({width, height})=> {
//   width && { width: width }, height && {height: height}
    return (
      <View style={{flex:1}}> 
      <Swiper style={styles.wrapper}  horizontal={true} showsPagination={false} autoplay={2.5} autoplay={true} >
        <View style={[styles.slide1,  ]}>
          <Image resizeMode={'cover'} style={{ height:200,
      width:'98%', borderRadius:10}} source={require('../../../assets/banner1.jpg')} />
        </View>
      <View style={styles.slide2}>
      <Image resizeMode={'cover'}  style={{  height:200,
      width:'98%', borderRadius:10}} source={require('../../../assets/banner2.jpg')} />

        </View>
      </Swiper>
      </View>

    )
  };

  export default SwiperComponent