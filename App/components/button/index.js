import React from 'react'
import {  Pressable, Text } from 'react-native'
import { styles } from './styles'

export const Button = ({ text, onPress }) => {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
export default Button