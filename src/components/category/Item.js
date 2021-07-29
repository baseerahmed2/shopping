import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import HorizontalLine from '../../components/horizontalLine/index';
import styles from './style';
import commonStyle from '../../theme/style';
import { ARROW_FORWARD } from '../../theme/images';

const Item = ({name, navigation}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.container]} onPress={()=>navigation.navigate('Product')} >
        <Text
          style={[commonStyle.regularText, {fontSize: 16, padding:6, }]}>
         {name}
        </Text>
        <Image source={ARROW_FORWARD} style={{width:20, height:20, opacity:0.6 }}/>
      </TouchableOpacity>
      <HorizontalLine />
  </View>
  );
};

export default Item;
