import {StyleSheet} from 'react-native'

export const colors = {
    white: "#FFFFFF",
    black: "#000000",
    ligthGray: "#e6e3e3",
    aquaBlue: "#00B4FF",
    ligthAquaBlue: "#4DC4FF",


}

export const estilosGlobales = StyleSheet.create({
    backgroundDegree:{
        flex:1 * 0.5,
        justifyContent:"flex-end",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },

    container:{
        flex:1,
        backgroundColor:colors.white,
    },
    degreeContainer:{
        flex:1,
    },
    result:{
        fontSize:70,
        color:colors.white,
        fontWeight:"400",
        textAlign:"right",
        marginHorizontal:15
    },
    subResult:{
        fontSize:50,
        color:colors.white,
        fontWeight:"300",
        textAlign:"right",
        paddingBottom:10,
        marginHorizontal:15
    },
    boton:{
        width:80,
        height:80,
        backgroundColor:colors.ligthGray,
        borderRadius:20,
        justifyContent:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },

    botonText:{
        color:colors.black,
        textAlign:"center",
        fontSize:40,
        fontWeight:"300",
        marginHorizontal:10
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    },
    keyboardContainer:{
        flex:1,
        justifyContent:"center"
    },
    // darkThemeBoton:{
    //     position:"absolute",
    //     top:30,
    //     left:30,
    //     transform: [{scaleX:1.5}, { scaleY:1.5}]
    // }
})