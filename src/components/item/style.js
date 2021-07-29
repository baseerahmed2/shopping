import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Container:{
        marginTop:10,
        alignItems:'center',
     
    },
    itemView:{
        height:95,
        backgroundColor:'#Fff',
        // rgb(240,244,247)
        elevation:2,
        borderRadius:8,
        width:95,
        flexWrap:'wrap',
        marginHorizontal:10,
        marginVertical:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,
    }
});

export default styles;