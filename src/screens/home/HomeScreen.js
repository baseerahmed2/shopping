import React, {useState, useRef, useEffect} from 'react'
import { View, FlatList,  } from 'react-native'
import  Header  from '../../components/header/index';
import Swiper from '../../components/swiper/index';
import SearchInput from '../../components/input/SearchInput';
import ShopItem from '../../components/item/ShopItem';
import ActivityIndicator from '../../components/activityIndicator/ActivityIndicator';
import styles from './style';

// todo: change to dynamic 
import { shopList } from '../../utils/StaticContent';

const HomeScreen = ({navigation, addShop, _shopsList}) => {


 const [search, setSearch] = useState('')
 const [active , setActive] = useState(false)
 const  [animating, setAnimating] = useState(false)

 const searchRef = useRef();

useEffect(()=>{
    setAnimating(true)
    setTimeout(() => {
     addShop(shopList)
     setAnimating(false)
        
    }, 4000);
     return ()=>{

     }
}, []) 

    return (
        <View style={[styles.container]}>
           <Header selectmarket search navigation={navigation} />
           <View style={[styles.innerContainer]}>
           <Swiper  />
           <View style={{ width:'98%', position:'absolute', bottom:8, alignItems:'center',  }}>
           <SearchInput placeholder={'Search shop...'}
           search = {search}
           refer = {searchRef}
           editable = {false}
           onSubmitEditing={()=>searchRef.current.focus()}
           onfocus={()=>setActive(true)}
           active={active}
           onBlur={()=>setActive(false)}
           onChangeText={(text)=>setSearch(text)}
           onPressSearch={()=>navigation.navigate('SearchShop')}
           />  

           </View>
           
           </View>
           <View style={{flex:1, marginTop:10}}>
         {  animating ? <ActivityIndicator animating={animating}/>:

           <FlatList
                 data={_shopsList}
                 numColumns={3}
                 showsVerticalScrollIndicator={false}
                 renderItem={({item})=> <ShopItem navigation={navigation} {...item}/>}
                 keyExtractor={({id})=>id.toString()}
                 
                 />
}
</View>

        </View>
    )
}

export default HomeScreen

