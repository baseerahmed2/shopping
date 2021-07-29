import React from 'react'
import { View, Text } from 'react-native'
import styles from './style';

export default function index({opacity,}) {
    return (
        <View style={[styles.container, opacity &&  { opacity:0.1 },]}>
            
        </View>
    )
}
