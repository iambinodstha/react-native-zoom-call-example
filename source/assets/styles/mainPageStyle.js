import { StyleSheet } from 'react-native';
import { colors, fonts } from "../../global";

export const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: colors.darkGrey,
        flex: 1,
        alignItems: "center"
    },
    time: {
        color: colors.white,
        fontSize: 80,
        fontFamily: fonts.bold,
        marginTop: 40
    },
    date: {
        color: colors.white,
        fontSize: 20,
        fontFamily: fonts.regular,
        marginBottom: 50
    },
    button: {
        backgroundColor: colors.orange,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 50
    },
    buttonLabel: {
        color: colors.white,
        fontSize: 16,
        marginTop: 15,
        fontFamily: fonts.regular
    }
})