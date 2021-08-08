import React, {useState, useEffect, useRef} from 'react'
import { View, Text, Image, TouchableOpacity, TouchableHighlight, ToastAndroid } from 'react-native'
import {ARROW_FORWARD, FACEBOOK_ICON, GOOGLE_ICON, MAIL, PASSWORD } from '../../theme/images';
import styles from './style'
import NewInput from './../../components/input/NewInput';
import Error from '../../components/bottomSheet/Error';
import Button from '../../components/button/index';
import style from '../../theme/style';

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [active, setActive] = useState(false)
  const [error, setError] = useState(false)


  const usernameRef = useRef()
  const passwordRef = useRef()


// setTimeout(() => {
//     setError(false)
// }, 500);

useEffect(() => {

    return () => {
        
    }
}, [])




    return (
        <View style={[styles.container]}>
            <Image style={[styles.image]} source={require('../../../assets/profile.png')}/>
            <View style={styles.inputView}>
               <NewInput 
               value={username} 
               placeholder={'Email Address'}
               icon = {MAIL} 
               onChangeText={(text)=>setUsername(text)}
               refer={usernameRef}
               onSubmitEditing={() =>  passwordRef.current.focus()}
               onfocus={()=>setActive(true)}
               active={active}
               />
               <NewInput 
               value={password} 
               placeholder={'Password'} 
               icon = {PASSWORD} 
               onChangeText={(text)=>setPassword(text)}
               refer={passwordRef}
               onfocus={()=>setActive(true)}
               active={active}
               />

            </View>
            <View style={{width:'100%', marginTop:30}}>
                <Button title={'Login'} onButtonPress = {()=>navigation.navigate('App')}  />
                <TouchableHighlight  onPress ={()=>alert('s')} underlayColor={'#F0F4F7'} style={{ width:160, height:28, alignItems:'center', alignSelf:'flex-end', margin:20}}>

                <Text  style={[style.heading, {fontSize:14, textAlign:'right',  color:'#000',  }]}>Forget Password?</Text>
                </TouchableHighlight>


                <Text style={[style.heading, {fontSize:14, textAlign:'center',}]}>OR</Text>
               
                <View style={{ marginTop:10}}>
                <Button socialIcon icon={FACEBOOK_ICON} color={'#1877F2'} title={'Sign In With Facebook'} />
                </View>
                <View style={{ marginTop:10}}>
                <Button socialIcon icon={GOOGLE_ICON} color={'#db4a39'} title={'Sign In With Google'} />
                </View>
           
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'45%', paddingTop:40}}>
            <Text style={[style.regularText]}>No Account ?</Text>
            <TouchableHighlight underlayColor={'#F0F4F7'} style={{padding:10,  bottom:10}} activeOpacity={0.6} onPress={()=>navigation.navigate('Register')}>
            <Text style={[style.regularText, {fontWeight:'bold'}]}>Register</Text>

            </TouchableHighlight>
               

            </View>
           <TouchableOpacity onPress={()=>navigation.navigate('RiderApp')} style={{   borderWidth:0.3, padding:10, borderColor:'rgb(11,21,90)', opacity:0.7, marginTop:20, marginBottom:20, flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'45%'}}>
           <Text style={[style.regularText]}>Switch to captain</Text>
            <Image source={ARROW_FORWARD} style={{width:16, height:16}} />
           </TouchableOpacity>
             { error ? <Error />: null}
        </View>
    )
}

export default LoginScreen
