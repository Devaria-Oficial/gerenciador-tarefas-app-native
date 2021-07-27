import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import colors from '../constants/Colors';
import loginStyles from './login';
import headerStyles from './header';
import filtroStyles from './filtros';
import listaStyles from './lista';
import footerStyles from './footer';
import itemStyles from './itemLista';
import modalStyles from './modal';

const defaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTop: {
        justifyContent: "flex-start"
    },
    horizontalView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorMsg: {
        fontFamily: 'biennale-regular',
        textAlign: 'center',
        color: colors.errorColor,
        fontWeight: 'bold',
        fontSize: RFValue(16),
        marginBottom: RFValue(5),
    },
    inputSelect : {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize:RFValue(16),
        letterSpacing: RFValue(0.01),
        color: colors.primaryColor,
        minWidth: RFValue(220),
        backgroundColor: "transparent",
        fontFamily: 'biennale-regular',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: RFValue(1),
        borderColor: colors.mediumGreyColor,
    }
});

export { loginStyles, defaultStyles, headerStyles, filtroStyles, listaStyles, footerStyles, itemStyles, modalStyles }