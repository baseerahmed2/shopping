import React from 'react'
import { View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import styles from './style';

const index = ({toggleCheckBox, onValueChange, id}) => {
    return (
        <CheckBox
        style={[styles.container]}
        
        disabled={false}
        id={id}
        value={toggleCheckBox}
        onValueChange={onValueChange}
      />
    )
}

export default index
