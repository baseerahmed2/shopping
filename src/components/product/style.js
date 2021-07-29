import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height:210,
        width:150,
        backgroundColor:'#fff',
        marginHorizontal:8,
        marginTop:10,
        borderWidth:0.1,
        borderColor:'#0B155A',
        borderRadius:2,
        alignItems:'flex-start',
        padding:10,
    },
    image:{
        width:80, height:80,
        top:10,
    
    },
    imageView:{
        height:110,
        width:130, 
        alignSelf:'center',
        backgroundColor:'#F0F4F7',
        borderRadius:8,
        alignItems:'center'

    },
    detailView:{
        flex:1,
        top:3,
        justifyContent:'space-between',
    },
    cartButton:{
        marginTop:3,
        marginBottom:3, 
        width:130,
        height:20,
        borderWidth:0.7,
        borderRadius:30,
        alignSelf:'center',
        borderColor:'#0B155A',
        justifyContent:'center',
        alignItems:'center'
    },
    cartSelectedView:{
        width:130,
        height:20,
        borderRadius:30,
        borderWidth:0.7,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonStyle:{
        backgroundColor:'#0B155A',
        width:40,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        height:20,
        justifyContent:'center'
    },
    buttonStyle1:{
        backgroundColor:'#0B155A',
        width:40,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        height:20,
        justifyContent:'center'
    },
    cart:{
        textAlign:'center',
        alignSelf:'center'
    }
});
export default styles;
