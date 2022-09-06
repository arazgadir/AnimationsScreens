import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
        top: '5%'
    },
    photoView: {
        height: 80,
        width: '26%',
        backgroundColor: '#F2F3F3',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameSurname: {
        marginVertical: 20,
        left: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: '900',
        color: '#333333'
    },
    position: {
        fontSize: 16,
        fontWeight: '400'
    },
    profileInfoView: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
    edit: {
        backgroundColor: '#0071D8',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        paddingVertical: 20,
        borderRadius: 10,
        position: 'absolute',
        bottom: 60,
        alignSelf: 'center'
    },
   
    detailText: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10,
        backgroundColor: '#EAEDED',
        paddingVertical: 30,
        borderRadius: 10,
        paddingLeft: 20,

    }


})