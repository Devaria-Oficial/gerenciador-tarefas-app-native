import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import layout from '../constants/Layout';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    container: {
        marginTop: 16,
        flexDirection: "column",
        width: layout.window.width * 0.95,
        backgroundColor: colors.lightGreyColor,
        borderRadius: 12,
        padding: RFValue(10)
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    titleText: {
        fontSize: RFValue(16),
        letterSpacing: RFValue(0.01),
        color: colors.primaryColor,
        fontWeight: "bold"
    },
    filtros: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: RFValue(10)
    },
    filtrosCampos : {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: RFValue(8)
    },
    label : {
        color: colors.primaryColor,
        fontSize: RFValue(16),
        minWidth: RFValue(110),
        marginBottom: 0
    },
    datePicker: {
        height: RFValue(20)
    }
});