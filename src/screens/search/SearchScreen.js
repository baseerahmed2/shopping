import React ,{useState} from 'react'
import { View,  TextInput, Image, TouchableOpacity } from 'react-native'
import styles from './style';
import { BACK } from '../../theme/images';

const SearchScreen = ({navigation}) => {

    const [search, setSearch] = useState()
    return (
        <View style={[styles.container]}>
          <View style={[styles.searchHeader]}>
             <TouchableOpacity onPress={()=>navigation.goBack()}>
             <Image source={BACK}   style={{width:20, height:20, padding:10,}} />

             </TouchableOpacity>
          <TextInput 
          placeholder={'Search...'} 
          style={{marginLeft:10}}  
          value={search} 
          onChangeText={(text)=>setSearch(text)}
          placeholderTextColor={'#0B155A'}
          />
          </View>

        </View>
    )
}

export default SearchScreen
