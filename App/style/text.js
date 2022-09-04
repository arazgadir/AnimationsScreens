import React from 'react'
import { useTheme } from "@react-navigation/native"
import { Pressable, Text } from 'react-native'


export const CheetahListText = ({ onPress, onLongPress, content, description }) => {

    const theme = useTheme()

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? theme.colors.button : '#707070',
                    paddingLeft: 16,
                    paddingVertical: 16,
                    alignContent: 'center',
                    justifyContent: 'center',
                    marginBottom: 10
                }
            ]}
        >
            <Text>{content}</Text>
            <Text>{description}</Text>
        </Pressable>
    )
}