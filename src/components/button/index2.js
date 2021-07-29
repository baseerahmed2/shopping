import React from 'react'
import {  Text, View , TouchableOpacity} from 'react-native'
import styles from './style'
import commonStyle from '../../theme/style';

const index2 = ({title, color, onButtonPress}) => {
    return (
        <TouchableOpacity onPress={onButtonPress} style={[styles.container, styles.button2] }>
            <Text style={[commonStyle.regularText, {color:'#000', letterSpacing:1, fontSize:13,  fontWeight:'bold', letterSpacing:1}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default index2

