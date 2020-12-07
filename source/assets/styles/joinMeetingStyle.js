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
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: colors.white,
        fontFamily: fonts.bold,
        fontSize: 18,
    },
    optionLabel: {
        color: colors.white,
        fontFamily: fonts.bold,
        fontSize: 16,
        marginTop: 40,
        marginBottom: 10
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)'
    },
    switchLabel: {
        color: colors.white,
        fontFamily: fonts.regular,
        fontSize: 16,
    }
})