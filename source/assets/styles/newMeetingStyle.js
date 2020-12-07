import { StyleSheet } from 'react-native';
const { colors, fonts } = require("../../global");

export const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: colors.darkGrey,
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1.5,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        padding: 15
    },
    cancelText: {
        fontFamily: fonts.regular,
        color: colors.skyBlue,
        fontSize: 16
    },
    headerTitle: {
        fontFamily: fonts.bold,
        color: colors.white,
        fontSize: 18
    },
    content: {
        marginHorizontal: 20
    },
    label: {
        color: colors.white,
        fontFamily: fonts.regular,
        fontSize: 18,
        marginTop: 20
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 10,
        color: colors.white,
        padding: 14,
        marginTop: 20,
        fontSize: 16
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 50,
        marginTop: 20
    },
    buttonText: {
        color: colors.white,
        fontFamily: fonts.bold,
        fontSize: 18,
    }
})