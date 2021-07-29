import React, {useEffect, useState} from 'react'
import {  Text, View, Image,  TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/header/index';
import Button from '../../components/button/index';
import styles from './style';
import Swiper from '../../components/swiper';
import commonStyle from '../../theme/style';
import {COLLAPSE, ARROW_DOWN} from '../../theme/images';


const HomeDetailScreen = ({navigation}) => {
const [selected, setSelected] = useState(true)

useEffect(() => {
    return () => {
    }
}, [])


const showDetail = () =>{
    setSelected(!selected)
}
    return (
        <View style={[styles.container]}>
            <Header title={'product name here'} goback  search navigation={navigation}/>


            <View style={{height:'50%'}}>
            <Swiper width={'90%'} height={300} />
            </View>
            <View style={[styles.innerContainer]}>
            <Text style={[commonStyle.regularText, {fontSize:15, fontWeight:'bold', opacity:0.9, }]}>{'New product title here'}</Text>
            <Text style={[commonStyle.regularText, {fontWeight:'bold', marginTop:20}]}>{'Rs.120'}</Text>
           
            </View>
            <View style={{paddingTop:45}}>
            <Button title={'Add to cart'}/>

            </View>
            <View style={[styles.descriptionStyle]}>
                <View style={{  flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[commonStyle.heading]}>{'Product Description'}</Text>
              {selected ? <TouchableOpacity activeOpacity={0.7} onPress={showDetail} >
                <Image source={ARROW_DOWN}  style={styles.icon}/>
                </TouchableOpacity> :  <TouchableOpacity activeOpacity={0.7} onPress={showDetail}>
                <Image source={COLLAPSE}  style={styles.icon}/>
                </TouchableOpacity> }  
                
                </View>
            <Text ellipsizeMode={'tail'}  numberOfLines={selected ? 1: 0} style={[commonStyle.h3, {opacity:0.6, paddingTop:10, lineHeight:20,  }, selected ? {width:'90%'}:null ]}>{'A watch is a very complex composition of top notes, heart notes and base notes. The top notes are the most delicate and do typically not last very long.'}</Text>
              </View>
        </View>
    )
}

export default HomeDetailScreen

