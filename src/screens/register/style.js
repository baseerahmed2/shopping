import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    inputView:{
        marginTop:40,
        height:400,
        justifyContent:'space-between',
        alignSelf:'center'
    },
    checkBoxView:{
        top:20, flexDirection:'row', alignItems:'center', justifyContent:'space-between', width:65
    }
});

export default styles;