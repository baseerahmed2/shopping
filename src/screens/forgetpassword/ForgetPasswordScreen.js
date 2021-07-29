import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import style from '../../theme/style';
import NewInput from '../../components/input/NewInput';
import {PASSWORD, CLOSE} from '../../theme/images';
import Button from '../../components/button/index';

const ForgetPasswordScreen = ({navigation}) => {
   console.log(navigation)

  const passwordRef = useRef();
  const NewpasswordRef = useRef();
  const ConfirmpasswordRef = useRef();

  function nextFocus(current) {
    switch (current) {
      case 'password':
        NewpasswordRef.current.focus();
        break;
      case 'Newpassword':
        ConfirmpasswordRef.current.focus();
        break;

      default:
        break;
    }
  }

  return (
    <View style={[styles.container]}>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          alignSelf: 'flex-end',
          paddingTop: 30,
        }}>
        <Text
          style={[
            style.heading,
            {fontWeight: 'bold', opacity: 0.8, textAlign: 'center'},
          ]}>
          Change password
        </Text>
        <TouchableOpacity style={{ padding:2}} onPress={() => navigation.goBack()}>
          <Image
          
            source={CLOSE}
            style={{width: 24, height: 24, padding: 3}}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.inputView]}>
        <NewInput
          refer={passwordRef}
          placeholder={'Password'}
          icon={PASSWORD}
          onSubmitEditing={() => nextFocus('password')}
        />
        <NewInput
          refer={NewpasswordRef}
          placeholder={'New password'}
          icon={PASSWORD}
          onSubmitEditing={() => nextFocus('Newpassword')}
        />
        <NewInput
          refer={ConfirmpasswordRef}
          placeholder={'Confirm new password'}
          icon={PASSWORD}
        />
      </View>
      <View style={{width: '100%', paddingTop: 20}}>
        <Button title={'Change password'} />
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;
