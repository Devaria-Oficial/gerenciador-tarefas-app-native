import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import layout from '../constants/Layout';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: {
        width: layout.window.width,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: RFValue(10),
        borderTopWidth: 0
    },
    image: {
        width: RFValue(60),
        resizeMode: 'contain',
        marginRight: RFValue(15)
    },
    text: {
        fontSize: RFValue(16),
        color: colors.primaryColor,
        fontWeight: "bold"
    },
    button:{
        flexDirection: "row",
        backgroundColor: colors.lightGreyColor,
        borderColor: colors.primaryColor,
        borderWidth: RFValue(1),
        borderStyle: "solid",
        borderRadius: RFValue(12),
        width: layout.window.width * 0.96,
        minHeight: RFValue(18),
        padding: RFValue(15),
        paddingLeft: RFValue(20),
        alignItems: "center"
    }
});