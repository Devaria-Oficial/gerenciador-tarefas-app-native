import { StyleSheet } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import colors from '../constants/Colors';
import loginStyles from './login';
import headerStyles from './header';

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
    }
});

export { loginStyles, defaultStyles, headerStyles }