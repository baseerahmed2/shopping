import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    profileImage:{
        width:100,  height:100, borderRadius:50,
        alignSelf:'center'
    },
    innerContainer:{
        flex:1,
        paddingTop:20,
    },
    icon:{
        width:16,
        height:16,
        opacity:0.7
    },
   iconView: {flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'space-between', 
        paddingHorizontal:20
    }
});

export default styles