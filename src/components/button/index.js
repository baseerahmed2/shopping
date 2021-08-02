import React from 'react'
import {  Text, Image , TouchableOpacity} from 'react-native'
import styles from './style'
import commonStyle from '../../theme/style';

const index = ({title, color, onButtonPress, marginTop, socialIcon, icon}) => {
    return (
        <TouchableOpacity onPress={onButtonPress} style={[styles.container, color && {backgroundColor:color,}, marginTop && { marginTop: marginTop}  ] }>
         { socialIcon && <Image source={icon} style={{width:25, height:25, marginRight:10}}   />}
            <Text style={[commonStyle.regularText, {color:'#fff', letterSpacing:1, fontSize:13,  fontWeight:'bold', letterSpacing:1}]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default index

