import React from 'react'
import { View, Text } from 'react-native'
import styles from './style';
import style from '../../theme/style';
import Header from '../../components/header/index';
import Button from '../../components/button/index2';

const ChangePaymentScreen = ({navigation}) => {
    return (
        <View style={[styles.container]}>
           <Header goback title={'Change payment method'} width navigation={navigation} />
           <View style={{ alignSelf:'center',  padding:30, justifyContent: 'space-between', alignItems:"center", height:'40%', width:'100%' }}>
               <Text style={[style.heading, {fontSize:25, top:30, fontWeight:'bold', letterSpacing:2, color:'#0B155A',}]}>Oop's</Text>
         <Text style={[style.h2, {textAlign:'center', letterSpacing:1}]}>Sorry, we have currently no other payment option</Text>
          <View style={{width:'100%'}}>

          <Button title={'Goback'}  onButtonPress={()=>navigation.goBack()} />
          </View>

           </View>
        </View>
    )
}

export default ChangePaymentScreen
