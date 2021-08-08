import React, { useEffect }from 'react'
import { View, Text,  } from 'react-native'
import styles from './style';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyA9Wnzm_MJUTbL3P1nWadaV0FQex4uBYWQ');



const AddAddressScreen = () => {

useEffect(() => {
   
  Geolocation.getCurrentPosition((position)=>{
      console.log('location', position )
      let { latitude, longitude } = position.coords;
  
     fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBhsbXBgu4apyDic41mCHg9i8yGX8nSZ44`)
     .then((response)=>{
         console.log('response', response)

     }).catch((error)=>{
      console.log('error',error)
     })


    //   Geocoder.from(latitude, longitude).then((json)=>{
    //     console.log( 'nn',json)
 
    // }).catch((error)=>{
    //      console.log(error)
    // })
  }),
  (error)=>{
      console.log(error.code, error.message)

  },
  { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    return () => {
    }
})


    return (
        <View style={[styles.container]}>
            <Text>AddAddressScreen</Text>
        </View>
    )
}

export default AddAddressScreen
// 48ZV7uJSY-9J9pM0o6bskVnhTKKUY35HnuU1u-dO0Yw


// market lat long, name

// [
// { 
//     id:'sdfsdfd',
//     storeName:'fruit store',
//     lat:11212,
//     long:3,433,
//     description:'vegatble, ',
//     image: 'image_url/logo',
// }];


// categories:{
//     vegtable:{
//         name:'',

//     }
// }



// ocr ...  excel sheet 