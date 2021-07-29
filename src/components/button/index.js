import React from 'react'
import {  Text, View , TouchableOpacity} from 'react-native'
import styles from './style'
import commonStyle from '../../theme/style';

const index = ({title, color, onButtonPress}) => {
    return (
        <TouchableOpacity onPress={onButtonPress} style={[styles.container, color && {backgroundColor:color}] }>
            <Text style={[commonStyle.regularText, {color:'#fff', letterSpacing:1, fontSize:13,  fontWeight:'bold', letterSpacing:1}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default index

