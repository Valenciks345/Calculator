import { StyleSheet } from "react-native";

export const colors = {
    darkGray:"#2D2D2D",
    ligthGray:"#9B9B9B",
    orange:"#FF9427",

    textPrimary:"#FFF",
    textSecondary:"#666666",
    background: "#000000"
}

export const globalStyles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor: colors.background,
    },

    calculatorContainer:{
        flex:1,
        justifyContent:"flex-end",
        padding:5
    },

    mainResults:{
        color: colors.textPrimary,
        fontSize:70,
        textAlign:"right",
        marginBottom:5,
        fontWeight:"400"
    },

    subResult:{
        color:colors.textSecondary,
        fontSize:40,
        textAlign:"right",
        fontWeight:"400"
    },

    button:{
        width:80,
        height:80,
        fontWeight:"300",
        backgroundColor:colors.darkGray,
        borderRadius:40,
        justifyContent:"center",
        marginHorizontal:8
    },

    buttonText:{
        textAlign:"center",
        padding:10,
        fontSize:30,
        color:colors.textPrimary,
        fontWeight:"300"
    },

    row:{
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:18,
        paddingHorizontal:10,
    }

})