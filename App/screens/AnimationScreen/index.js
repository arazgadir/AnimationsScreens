import React, { useRef, useState, useCallback } from 'react';
import { View, Text, StatusBar, Dimensions, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';

const { width, height } = Dimensions.get('window')

const colors = {
    black: '#323F4E',
    red: '#F76A6A',
    text: '#ffffff'
}

const timers = [...Array(13).keys()].map((i) => (i === 0 ? 1 : i * 5));
const ITEM_SIZE = width * 0.38;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

export const AnimationScreen = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const timerAnimation = useRef(new Animated.Value(height)).current
    const [duration, setDuration] = useState(timers[0])
    const animation = useCallback(()=> {
        Animated.sequence([
            Animated.timing(timerAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }),
                Animated.timing(timerAnimation, {
                    toValue: height,
                    duration: duration * 1000,
                    useNativeDriver: true
                } )
        ]).start(()=> {

        })
    }, [duration])

    const RenderItem = (item, index) => {
        const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE
        ]
        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [.4, 1, .4]
        })
        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [.7, 1, .7]
        })
        return <View style={styles.renderView}>
            <Animated.Text style={[styles.text, {
                opacity,
                transform: [{
                    scale
                }]
            }]}>
                {item}
            </Animated.Text>
        </View>
    }

    return (
        <View style={styles.container}>

            <StatusBar hidden />
            <Animated.View
                style={[StyleSheet.absoluteFillObject, {
                    height, width, backgroundColor: colors.red,
                    transform: [{ translateY: timerAnimation }]
                }]}

            />
            <Animated.View
                style={[StyleSheet.absoluteFillObject, styles.animStyle]} >
                <TouchableOpacity onPress={animation}>
                    <View style={styles.roundButton} >
                        <Text style={styles.roundButtonText}>Start</Text>
                        </View>
                </TouchableOpacity>
            </Animated.View>

            <View style={styles.TextView} >
                <Animated.FlatList
                    data={timers}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item, index }) => {
                        return RenderItem(item, index)
                    }}
                    onMomentumScrollEnd={ev => {
                        const index = Math.floor(ev.nativeEvent.contentOffset.x / ITEM_SIZE)
                        setDuration(timers[index])
                    }}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                    horizontal
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
                    style={{ flexGrow: 0 }}
                    snapToInterval={ITEM_SIZE}
                    decelerationRate='fast'
                />
            </View>
        </View>
    )
}
