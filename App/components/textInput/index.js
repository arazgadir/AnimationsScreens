import React  from 'react'
import { TextInput, SafeAreaView } from 'react-native'
import { styles } from './styles'

export const Input = ({ placeholder }) => {

    const [text, onChangeText] = React.useState("");

    return (
        <SafeAreaView  style={styles.inputView} >
            <TextInput
                style={ placeholder === 'Description'? styles.descriptInput :  styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={placeholder}
            />
        </SafeAreaView>

    )
}