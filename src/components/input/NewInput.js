import React, {useRef, useState} from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import styles from './style';
import HorizontalLine from '../../components/horizontalLine/index';

const NewInput = ({placeholder, value, onChangeText, icon, refer, onSubmitEditing, onfocus, active}) => {


    return (
            <View style={{ height:38,  }}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:'60%'}}>

                <Image style={{width:18, height:18}} source={icon}/>
            <TextInput 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={[styles.input2]  }  
            placeholderTextColor={ '#000' }
            ref={refer}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={'next'}
            onFocus={onfocus}
            />
                </View>

            <HorizontalLine  opacity/>
            </View>

    )
}

export default NewInput
