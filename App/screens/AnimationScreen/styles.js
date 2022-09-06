import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
const ITEM_SIZE = width * 0.38;

const colors = {
    black: '#323F4E',
    red: '#F76A6A',
    text: '#ffffff',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    animStyle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 30
    },
    roundButton: {
        width: 80,
        height: 80,
        borderRadius: 80,
        backgroundColor: colors.red,
        justifyContent: 'center',
        alignItems: 'center'
    },
    roundButtonText: {
        fontSize: 20,
    },
    TextView: {
        position: 'absolute',
        top: height / 3,
        left: 0,
        right: 0,
        flex: 1
    },
    text: {
        fontSize: ITEM_SIZE * 0.8,
        fontFamily: 'Menlo',
        color: colors.text,
        fontWeight: '900',
    },
    renderView: {
        width: ITEM_SIZE,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

