import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Loader = ({animating}) => {
    return (
        <ActivityIndicator animating={animating} size={'large'} color={'rgb(11,21,90)'} />
    )
}

export default Loader
