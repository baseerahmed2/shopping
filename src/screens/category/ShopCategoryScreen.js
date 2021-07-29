import React from 'react'
import {  Text, View,FlatList } from 'react-native';
import Header from '../../components/header/index';
import {categories} from '../../utils/StaticContent';
import Item from '../../components/category/Item';
import styles from './style';


const ShopCategoryScreen = ({navigation}) => {
    return (
        <View style={[styles.container]}>
            <Header title={'Categories'} goback search navigation={navigation} />

            <FlatList
            showsVerticalScrollIndicator={false}
             data={categories}
             renderItem={({item})=><Item {...item} navigation={navigation} />}
            />

        </View>
    )
}

export default ShopCategoryScreen

