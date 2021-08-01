import React, {useState} from 'react'
import {  Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './style';
import commonStyle from '../../theme/style';
import { PLUS, MINUS } from '../../theme/images';
import { addToCart } from './../../redux/actions/cart';

const Item = ({name, description, image, price, discountedPrice, navigation, addItemToCart , id}) => {
   const [isCartSelected,setCart ] = useState(false);
   const [totalCartItem, setCartItem] = useState(0)

   const product = { name, price, image, id  } ;


 function selectCart(params) {
    setCart(true)
    addItemToCart(product)
}



function addToCart(params) {
    if(totalCartItem == 0){
        setCart(false)

    }
    
}



    return (
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('ProductDetail')} style={[styles.container]}>

            <View style={[styles.imageView]}>
            <Image resizeMode={'contain'} style={[styles.image]} source={require('../../../assets/pepsi.jpg')} />                

            </View>

            <View style={[styles.detailView]}>
            <Text style={[commonStyle.h2, { fontWeight:'normal',  }]}>{name}</Text>
            <Text style={[commonStyle.h3, {opacity:0.6 }]}>{description}</Text>
            <Text style={[commonStyle.h3, {fontWeight:'bold', opacity:1 }]}>{`Rs.${price}`}</Text>
            {!isCartSelected && <TouchableOpacity activeOpacity={0.3} onPress={selectCart }  style={[styles.cartButton]}>
                <Image source={PLUS} style={{width:16, height:16}} />
           </TouchableOpacity>}
           { isCartSelected && <View style={[styles.cartSelectedView]}>
              <TouchableOpacity activeOpacity={0.6} style={[styles.buttonStyle]} onPress={addToCart} >
                  <Image source={MINUS} style={{ width:14, height:14,tintColor:'#fff', alignSelf:'center' }} />
              </TouchableOpacity>
              <Text style={[styles.cart]}>{1}</Text>
              {/* plus */}
              <TouchableOpacity activeOpacity={0.6} style={[styles.buttonStyle1]} onPress={()=>addItemToCart(product)} >
                  <Image source={PLUS} style={{ width:14, height:14,tintColor:'#fff', alignSelf:'center' }} />
              </TouchableOpacity>
           </View>  }
            </View>
          
        </TouchableOpacity>
    )
}

export default Item

