import React, {useRef, useState} from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import styles from './style';
import style from '../../theme/style';
import Header from '../../components/header/index';
import NewInput from '../../components/input/NewInput';
import Button from '../../components/button/index';
import { ACCOUNT_IN_ACTIVE, MAIL, PASSWORD,ADDRESS1, ADDRESS, } from '../../theme/images';


const AccountInformationScreen = ({navigation}) => {


    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
  
    const passwordRef = useRef();
    const addressRef = useRef();
    const areaRef = useRef();
  
  
   const nextFocus = (current) =>{
       switch(current){
           case 'firstname' :
              lastnameRef.current.focus();
           break;
           case 'lastname' :
              emailRef.current.focus();
          break;
          case 'email' :
              phoneRef.current.focus();
          break;
          case 'phone' :
              passwordRef.current.focus();
          break;
          case 'password' :
              addressRef.current.focus();
          break;
          case 'address' :
              areaRef.current.focus();
          break;
  
       }
   }
  

    return (
        <View style={[styles.container]}>
            <Header title={'Account'} goback width navigation={navigation} />
            <View style={[styles.inputView]}>
        <NewInput 
        refer={firstnameRef}
        placeholder={'First Name'} 
        icon={ACCOUNT_IN_ACTIVE}
        onSubmitEditing={()=>nextFocus('firstname')} 
        />
        <NewInput
        refer={lastnameRef}

         placeholder={'Last Name'}
         icon={ACCOUNT_IN_ACTIVE} 
        onSubmitEditing={()=>nextFocus('lastname')} 


          />
        <NewInput 
        refer={emailRef}

         placeholder={'Email Address'}
         icon={MAIL}
        onSubmitEditing={()=>nextFocus('email')} 

          />
        <NewInput 
        refer={phoneRef}

        placeholder={'03xxxxxxxxx'} 
        icon={ACCOUNT_IN_ACTIVE} 
        onSubmitEditing={()=>nextFocus('phone')} 

        />
        <NewInput 
        refer={passwordRef}

        placeholder={'Password'} 
        icon={PASSWORD}
        onSubmitEditing={()=>nextFocus('password')} 

        />
        <NewInput 
        refer={addressRef}

        placeholder={'Address (Optional)'} 
        icon={ADDRESS1} 
        onSubmitEditing={()=>nextFocus('address')} 

        />
        <NewInput 
        refer={areaRef}

        placeholder={'Area (Optional)'} 
        icon={ADDRESS} 
        onSubmitEditing={()=>nextFocus('area')} 

        />

        </View>
        <View style={{flex:1, top:60,  width:'100%', alignItems:'center'}}>

<Button title={'Edit profile'} />
<View style={{marginTop:10, width:'100%'}}>
<Button title={'Change password'} onButtonPress={()=>navigation.navigate('ForgetPassword')} />

</View>


      </View>
        </View>
    )
}

export default AccountInformationScreen
