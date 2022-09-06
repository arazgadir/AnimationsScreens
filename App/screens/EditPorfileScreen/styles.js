import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: '#323F4E',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
    },
    edit: {
        backgroundColor: '#0071D8',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        paddingVertical: 20,
        borderRadius: 10,
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center'
    },
    input: {
        height: 50,
        width: '90%',
        padding: 10,
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 10
    },
})