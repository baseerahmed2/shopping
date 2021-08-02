import React, {useState} from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../../components/header/index';
import styles from './style';
import style from '../../theme/style';
import CheckBox from '../../components/checkbox/index';
import HorizontalLine from '../../components/horizontalLine/index';
import commonStyle from '../../theme/style';
import Button from '../../components/button/index';

const CheckOutScreen = ({navigation, cartItems,totalAmount, subTotalCounter}) => {
    console.log('tocheckout', cartItems)
    const [checkBox, setCheckBox] = useState('')
    const [textArea, setTextArea] = useState('');
    return (
        <View style={[styles.container]}>
            <Header goback width  title={'CheckOut'} navigation={navigation}/>
          <View style={{flex:1, justifyContent:'space-between',}}>
           <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems:'center',  }}>

              <View style={[styles.addressView]}>
                  <View style={[styles.alignViewStyle]}>
                <Text style={[style.heading]}>Your delivery address</Text>
               <TouchableOpacity style={{padding:2}} onPress={()=>alert('chnage address ')}>
               <Text style={[style.heading, { color:'#F54F22'}]}>Change</Text>
               </TouchableOpacity>
               </View>

               {/* adfress view */}
               <View style={{flex:1, paddingTop:20, paddingBottom:20, justifyContent:'space-between', }}>
                <View style={[styles.alignViewStyle, {}]}>
               <Text style={[style.h2, { fontWeight:'bold'}]}>Change:</Text>
               <Text style={[style.h3,{width:'85%', fontSize:10,paddingLeft:15}]}>that might appear on the page you’re looking for. For example,"</Text>

                </View>
                <View style={[styles.alignViewStyle, {}]}>
               <Text style={[style.h2, { fontWeight:'bold'}]}>City:</Text>
               <Text style={[style.h3,{width:'85%', fontSize:10, paddingLeft:22}]}>that might appear on the page you’re looking for. For example,"</Text>

                </View>  
                 <View style={[styles.alignViewStyle, {}]}>
               <Text style={[style.h2, { fontWeight:'bold'}]}>Market:</Text>
               <Text style={[style.h3,{width:'85%', fontSize:10, paddingLeft:17}]}>F-7 Markaz </Text>

                </View>
            </View>
              </View>
                {/* payment methond */}
                <View style={[styles.paymentView, {marginTop:10}]}>
                <View style={[styles.alignViewStyle]}>
                <Text style={[style.heading]}>Payment method</Text>
               <TouchableOpacity style={{padding:2}} onPress={()=>navigation.navigate('Payment')}>
               <Text style={[style.heading, { color:'#F54F22'}]}>Change</Text>
               </TouchableOpacity>
               </View>

               
               

               {/*  */}
               <View style={[styles.alignViewStyle, {paddingTop:20}]}>
                <Text style={[style.h2]}>Cash on delivery</Text>
                <CheckBox/>
               </View>
               
                </View>

                
                {/* product detail view */}
                <View style={[styles.detailView, {marginTop:10}]}>
                    <View style={[styles.headerView]}>
                    <Text style={[style.h2]}>Product name</Text>
                    <Text style={[style.h2]}>Quantity</Text>
                    <Text style={[style.h2]}>Amount</Text>
                    </View>
                  {cartItems.map((item)=>{
                      return (
<>
<View style={[styles.itemView]}>
               <Text style={[style.h3,{width:'45%',  paddingLeft:15}]}>{item.name}</Text>
               <Text style={[style.h3,{width:'45%', left:34, }]}>{item.quantity}</Text>
               <Text style={[style.h3,{width:'45%', }]}>{item.sum}</Text>
                    </View>
               <HorizontalLine opacity />
               </>

                      )
                  })}

                    

                </View>
                {/* cart detail */}
                <View style={[styles.cartView]}>
                <Text style={[commonStyle.heading]}>{'Cart detail'}</Text>
                </View>
                <View style={[styles.cartDetail]}>
                    <View style={[styles.cartItemStyle]}>
                    <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>{`Subtotal ${subTotalCounter}:`}</Text>
                    <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>{`Rs.${totalAmount}`}</Text>
                    </View>
                    <View style={[styles.cartItemStyle]}>
                    <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>{'Discount :'}</Text>
                    <Text style={[commonStyle.h3,styles.letterSpacingStyle]}>{'Rs.0'}</Text>
                    </View>
                    <View style={[styles.cartItemStyle]}>
                    <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>{'Packing / Delivery fee :'}</Text>
                    <Text style={[commonStyle.h3, styles.letterSpacingStyle]}>{'Rs.0'}</Text>
                    </View>
                </View>
                <HorizontalLine />
                <View style={[styles.cartItemStyle, {padding:16}]}>
                    <Text style={[commonStyle.h3,{fontWeight:'bold', letterSpacing:2}]}>{'Total :'}</Text>
                    <Text style={[commonStyle.h3, {fontWeight:'bold', letterSpacing:2}]}>{`Rs.${totalAmount}/-`}</Text>
                    </View>
                   <View style={[styles.textArea]}>
                       <TextInput
                       placeholder={'Write a Comments'}
                       value={textArea}
                       multiline={true}
                       numberOfLines={4}
                       onChangeText={(text)=>setTextArea(text)}
                       style={{ height:200, textAlignVertical: 'top', fontSize:14, color:'#0B155A' }}
                       />
                   </View>

           </ScrollView>

           </View>
           <View style={[styles.buttonView]}>
           <Button  title={'Place order'} onButtonPress={()=>alert('suucess')} />

           </View>
        </View>
    )
}

export default CheckOutScreen

