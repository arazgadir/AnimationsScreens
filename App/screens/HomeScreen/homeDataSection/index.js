import React, { FC } from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { useDispatch } from 'react-redux';
import { ClearData } from '../../../modules/redux/post';



export const HomeDataSection = ({ id, title, image, date, status, description }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <ImageBackground
                    source={{ uri: image }}
                    style={{ height: 130, width: 130 }}
                    imageStyle={{ borderRadius: 8 }}
                >
                </ImageBackground>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.timeText}>{`Created at: ${date}`}</Text>

                    <View style={status === 'Draft' ? styles.draft : styles.published}>
                        <Text style={styles.statusText}>{status}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.description}>
                <Text style={{ color: 'black' }}>{description}</Text>
            </View>
                <TouchableOpacity
                    onPress={() => dispatch(ClearData(id))}
                    style={styles.clear} >
                        <Text>Remove</Text>
                </TouchableOpacity>
        </View>
    )
}