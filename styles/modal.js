import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import layout from '../constants/Layout';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.whiteColor,
        borderColor: colors.primaryColor,
        borderWidth: RFValue(1.2),
        borderRadius: RFValue(16),
        justifyContent: "center",
        alignItems: "center",
        width: layout.window.width * 0.8,
        padding: RFValue(20)
    },
    button : {
        width: layout.window.width * 0.3,
        height: RFValue(40),
        backgroundColor: colors.primaryColor,
        borderColor: colors.primaryColor,
        borderRadius: RFValue(12),
        justifyContent: "center",
        alignItems: "center"
    }, 
    buttonText: {
        color: colors.whiteColor,
        fontSize: RFValue(12),
        fontWeight: "bold"
    },
    buttonDelete : {
        width: layout.window.width * 0.2,
        height: RFValue(40),
        backgroundColor: colors.whiteColor,
        borderColor: colors.primaryColor,
        borderWidth: RFValue(1),
        borderRadius: RFValue(12),
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: RFValue(10)
    }, 
    buttonDeleteText: {
        color: colors.primaryColor,
        fontSize: RFValue(12),
        fontWeight: "bold"
    },
    buttonsEdit: {
        width: layout.window.width * 0.2,
    },
    buttonCancel : {
        width: layout.window.width * 0.3,
        height: RFValue(40),
        backgroundColor: colors.whiteColor,
        borderColor: colors.whiteColor,
        borderRadius: RFValue(12),
        justifyContent: "center",
        alignItems: "center"
    }, 
    buttonCancelText: {
        color: colors.primaryColor,
        textDecorationLine: "underline",
        fontSize: RFValue(12),
        fontWeight: "bold"
    },
    title: {
        textAlign: "center",
        color: colors.primaryColor,
        fontSize:  RFValue(14),
        marginVertical:  RFValue(10),
        fontWeight: "bold",
    },
    input : {
        borderWidth: RFValue(0.5),
        borderColor: colors.mediumGreyColor,
        borderRadius: RFValue(8),
        padding: RFValue(10),
        height: RFValue(40),
        marginTop: RFValue(10),
        width: layout.window.width * 0.7,
    },
    inputText: {
        color: colors.mediumGreyColor,
        fontSize:  RFValue(12),
    },
    focus : {
        borderColor: colors.primaryColor,
    },
    buttons: {
        marginTop: RFValue(25)
    },
    error : {
        color: colors.errorColor,
    }
});