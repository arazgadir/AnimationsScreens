import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    postContent: {
        marginVertical: 15,
        width: '100%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    postPhoto: {
        marginVertical: 5,
        height: '20%',
        backgroundColor: '#FFFFFF',
        width: '100%',
        paddingHorizontal: 20,
    },
    postPhotoText: {
        fontSize: 18,
        color: 'black',
        paddingVertical: 10
    },
    photoView: {
        height: '60%',
        width: '25%',
        backgroundColor: '#F2F3F3',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteView: {
        height: 24,
        width: 24,
        backgroundColor: '#F2F3F3',
        borderRadius: 15,
        alignSelf: 'flex-end'
    },
    inputView: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 10,
    },
    descriptInput: {
        // height: 100,
        marginBottom: 20,
        width: '90%',
        padding: 10,
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        paddingBottom: 60
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
    statusInput:{
        height: 50,
        padding: 10,
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        borderColor: 'white',
        marginBottom: 10
    },
    containerStatus: {
        width: '90%',
    }
})