import React, {useState, useRef} from 'react';
import { Image, KeyboardAvoidingView, Text, TouchableOpacity, View, ScrollView, TouchableHighlight } from 'react-native';


import styles from './style';
import style from '../../theme/style';
import {
  CLOSE,
  ACCOUNT_IN_ACTIVE,
  MAIL,
  PASSWORD,
  ADDRESS,
  ADDRESS1,
  GENDER,
} from '../../theme/images';
import NewInput from '../../components/input/NewInput';
import CheckBox from '../../components/checkbox/index';
import Button from '../../components/button/index'; 

const RegisterScreen = ({navigation}) => {
  const [toggleCheckBoxForMale, setToggleCheckBoxForMale] = useState(false);
  const [toggleCheckBoxForFemale, setToggleCheckBoxForFemale] = useState(false);
  const [gender, setGender] = useState('')

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [area, setArea] = useState('')

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



function selectMale(newValue) {
    setGender('male')
    setToggleCheckBoxForMale(true)
    setToggleCheckBoxForFemale(false)
}
function selectFemale(newValue, id) {
    console.log(id)
    setGender('female')
    setToggleCheckBoxForMale(false)
    setToggleCheckBoxForFemale(true)


}

  return (
    <ScrollView contentContainerStyle={[styles.container]}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '60%',
          alignSelf: 'flex-end',
          paddingTop: 30,
        }}>
        <Text
          style={[
            style.heading,
            {fontWeight: 'bold', opacity: 0.8, textAlign: 'center'},
          ]}>
          Register
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={CLOSE}
            style={{width: 24, height: 24, right: 20, padding: 3}}
          />
        </TouchableOpacity>
      </View>
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
        <View
          style={{
            flexDirection: 'row',
            width: '25%',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <Image source={GENDER} style={{height: 18, width: 18}} />
          <Text style={[style.regularText]}>Gender</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '50%',
          }}>
          <View style={[styles.checkBoxView]}>
            <CheckBox
             id="male"

              toggleCheckBox={toggleCheckBoxForMale}
              onValueChange={ selectMale}
            />
            <Text style={[style.regularText]}>Male</Text>
          </View>
          <View style={[styles.checkBoxView]}>
            <CheckBox
             id="female"
              toggleCheckBox={toggleCheckBoxForFemale}
              onValueChange={selectFemale}
            />
            <Text style={[style.regularText]}>Female</Text>
          </View>
        </View>
      </View>

      {/*  */}
      <View style={{flex:1, top:70,  width:'100%', alignItems:'center'}}>

      <Button title={'Sign up'} />
      <View style={{flexDirection:'row', justifyContent:'space-between', width:'65%', marginTop:25}}>
            <Text style={[style.regularText]}>Already have an account ?</Text>
            <TouchableHighlight underlayColor={'#F0F4F7'} style={{padding:10,  bottom:10}} activeOpacity={0.6} onPress={()=>navigation.navigate('Login')}>
            <Text style={[style.regularText, {fontWeight:'bold'}]}>Login</Text>

            </TouchableHighlight>
               
            </View>
            </View>

    </ScrollView>
  );
};

export default RegisterScreen;
