import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { BACK, SEARCH_ICON } from '../../theme/images';
import commonStyle from '../../theme/style';

import styles from './style';

const index = ({route, home, selectmarket, search, goback, navigation, title, width,searcInput }) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [filter,setSearch] = useState('');

  return (
    <View style={[styles.container, width && { width:220,  } ]}>
      {goback && 
      <TouchableOpacity onPress={  ()=>  { !home ? navigation.goBack(): navigation.navigate(route) }}>
      <Image source={BACK} style={{width:20, height:20, padding:10,}} />
        
      </TouchableOpacity>
       }

      {selectmarket && (
        <View style={[styles.pickerContainer]}>
          <Picker
          dropdownIconColor={'#0B155A'}
          mode='dropdown'

            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="G-11" value="java" 
            color={'#0B155A'}
             />
            <Picker.Item label="F-11" value="js" />
          </Picker>
        </View>
      )}
      {title && <Text style={[commonStyle.heading, {fontWeight:'bold', fontSize:14, textAlign:'center'}]}>{title}</Text>}
      { search && <TouchableOpacity activeOpacity={0.6}  onPress={()=>navigation.navigate('Search')}> 
        <Image   source={SEARCH_ICON} style={{width:20.5, height:20.5, padding:12}} /> 

      </TouchableOpacity>  
      }
    </View>
  );
};

export default index;
