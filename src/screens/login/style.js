import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:"center"
    },
    image:{
        width:100, height:100, borderRadius:50, alignSelf:'center',
        marginTop:30
    },
    inputView:{
        marginTop:40,
        height:100,
        justifyContent:'space-between',
        alignSelf:'center'
    }
});


export default styles;