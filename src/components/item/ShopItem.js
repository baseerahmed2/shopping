import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import commonStyle from '../../theme/style';
import FastImage from 'react-native-fast-image'


const ShopItem = ({image, name, navigation}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Shop')}  style={[styles.Container]}>
      <View style={[styles.itemView]}>
        {/* <Image
          resizeMode={'contain'}
          source={require('../../../assets/fruitshop.jpg')}
          style={{width: 90, height: 100, alignSelf: 'center'}}
        /> */}
<FastImage
        style={{width: 90, height: 100, alignSelf: 'center'}}
        source={image}
        resizeMode={FastImage.resizeMode.contain}
    />
      </View>
      <Text style={[commonStyle.regularText, {fontWeight:'bold',}]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ShopItem;
