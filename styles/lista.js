import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import layout from '../constants/Layout';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: layout.window.width,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    empty:{
        justifyContent: "center",
    },
    image: {
        width: RFValue(280),
        resizeMode: 'contain'
    },
    text: {
        marginTop: RFValue(15),
        fontSize: RFValue(15),
        color: colors.primaryColor,
        fontWeight: "bold"
    }
});