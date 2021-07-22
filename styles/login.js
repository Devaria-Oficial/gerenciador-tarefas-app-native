import { StyleSheet } from 'react-native';
import colors from '../constants/Colors';
import { RFValue } from "react-native-responsive-fontsize";

export default StyleSheet.create({
    logo: {
        marginBottom: RFValue(30),
        width: RFValue(196),
        resizeMode: 'contain'
    },
    inputView: {
        padding: RFValue(10)
    },
    icone: {
        marginTop: RFValue(-18),
        marginRight: RFValue(10),
        width: RFValue(20),
        resizeMode: 'contain'
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginBottom: RFValue(12),
        fontSize: RFValue(16),
        fontFamily: 'biennale-regular',
        display: 'flex',
        alignItems: 'center',
        letterSpacing: RFValue(0.01),
        color: colors.primaryColor,
        width: RFValue(240),
        borderRadius: 0,
        paddingBottom: RFValue(7),
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: colors.mediumGreyColor,
        borderBottomWidth: RFValue(1)
    },
    button: {
        marginTop: RFValue(12),
        width: RFValue(272),
        height: RFValue(56),
        backgroundColor: colors.primaryColor,
        borderColor: colors.primaryColor,
        borderRadius: RFValue(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: RFValue(17),
        fontFamily: 'biennale-regular',
        fontWeight: 'bold'
    }
});