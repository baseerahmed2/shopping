import React from 'react'
import {  Text, View , TextInput, TouchableOpacity} from 'react-native'
import styles from './style';

const SearchInput = ({onPressSearch, editable,placeholder, search, onSubmitEditing, refer,onfocus, active, onBlur, onChangeText}) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPressSearch}>

            <TextInput placeholder={placeholder}
            editable={editable}
            
             style={[styles.input,]}
             placeholderTextColor={ active? '#0B155A':'#0B155A' }
             search={search}
             spellCheck={true}
             autoCorrect={true}
             selectionColor={active? '#0B155A':'#0B155A'}
             onSubmitEditing={onSubmitEditing}
             ref={refer}
             onFocus={onfocus}
             onBlur={onBlur}
             onChangeText={onChangeText}  
            />
        </TouchableOpacity>

    )
}

export default SearchInput

