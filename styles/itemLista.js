import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import layout from '../constants/Layout';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: layout.window.width * 0.95,
        backgroundColor: colors.lightGreyColor,
        borderRadius: RFValue(12),
        padding: RFValue(10),
        marginTop: RFValue(10),
        height: RFValue(65)
    },
    naoConcluido: {
        borderColor: colors.darkGreyColor,
        borderWidth: RFValue(1)
    },
    text: {
        margin: 0,
        color: colors.darkGreyColor,
        fontWeight: "bold",
        fontSize: RFValue(15)
    },
    textConcluido: {
        textDecorationLine: "line-through"
    },
    image :{
        width: RFValue(22),
        marginRight: RFValue(15),
        resizeMode: "contain"
    },
    textData : {
        fontSize: RFValue(14),
        color: colors.darkGreyColor,
        fontWeight: "normal"
    }
});