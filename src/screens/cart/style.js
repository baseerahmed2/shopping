import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    itemStyle:{
        width:330,
        height:98,
        borderWidth:0.1,
        borderColor:'#0B155A',
        borderRadius:2,
        marginTop:15,
        padding:10,
        flexDirection:'row',   
    },
    imageView:{
        height:78,
        width:130, 
        backgroundColor:'#F0F4F7',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    cartButton:{
        height:22, width:22,
        backgroundColor:'#0B155A',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        padding:10

    },
    cartView:{
        width:'100%',
        height:45,
        backgroundColor:'#F0F4F7',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'

    },
    cartDetail:{
        height:130,
       padding:20,
        width:'100%',
        justifyContent:'space-evenly',

    },
    cartItemStyle:{
        
        width:'100%',
            flexDirection:'row',
        justifyContent:'space-between'
    },
    letterSpacingStyle:{
        letterSpacing:2
    }
});

export default styles