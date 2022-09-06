import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    flatListView: {
        marginVertical: 15,
        width: '100%',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    logo: {
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        width: '100%',
    },
    dataView: {
        flexDirection: 'row',
        paddingVertical: 40,
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 15,
        shadowColor: "red",
        elevation: 12,
    },
    tinyLogo: {
        left: 5,
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    downLogo: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginHorizontal: 5
    },
    infoProduct: {
        flex: 1,
        paddingHorizontal: 20,
    },
    PorductTitle: {
        color: '#F1562C',
        fontSize: 20,
        fontWeight: '600',
        numberOfLines: 3
    },
    PorductDescription: {
        top: 10,
        fontSize: 12,
    },
    price: {
        top: 30,
        fontSize: 14,
        color: 'black',
        fontWeight: '600',
    }
})