import React, {useState, useRef, useEffect} from 'react'
import {  Text, View, ScrollView, FlatList } from 'react-native'
import  Header  from '../../components/header/index';
import Swiper from '../../components/swiper/index';
import SearchInput from '../../components/input/SearchInput';
import ShopItem from '../../components/item/ShopItem';
import styles from './style';
import { shopList } from '../../utils/StaticContent';


const HomeScreen = ({navigation}) => {
 const [search, setSearch] = useState('')
 const [active , setActive] = useState(false)
 const searchRef = useRef();
useEffect(() => {
    // effect
    return () => {
        // cleanup
    }
}, [])
    return (
        <View style={[styles.container]}>
           <Header selectmarket search navigation={navigation} />
           <View style={[styles.innerContainer]}>
           <Swiper  />
           <View style={{ width:'98%', position:'absolute', bottom:8, alignItems:'center',  }}>
           <SearchInput placeholder={'Search shop...'}
           search={search}
           refer = {searchRef}
           editable={false}
           onSubmitEditing={()=>searchRef.current.focus()}
           onfocus={()=>setActive(true)}
           active={active}
           onBlur={()=>setActive(false)}
           onChangeText={(text)=>setSearch(text)}
           onPressSearch={()=>navigation.navigate('SearchShop')}
           />  

           </View>
           
           </View>
           <FlatList
                 data={shopList}
                 numColumns={3}
                 showsVerticalScrollIndicator={false}
                 renderItem={({item})=> <ShopItem navigation={navigation} {...item}/>}
                 keyExtractor={({id})=>id.toString()}
                 
                 />
     
        </View>
    )
}

export default HomeScreen

