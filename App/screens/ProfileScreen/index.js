import React, { useState } from 'react';
import { View, ImageBackground, Pressable, Text } from 'react-native';
import { styles } from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import { AddPhoto } from '../../assets/svg/addPhoto';
import { DeleteImage } from '../../assets/svg/deleteImage';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export const ProfileScreen = () => {
    const [image, setImage] = useState('')
    const navigation = useNavigation()
    const ProfileData = useSelector((state) => state.profile.ProfileData)
    const { company, mail, name, phone, position } = ProfileData

    const SelectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileInfoView}>
                <View style={styles.photoView}>
                    {image ?
                        <ImageBackground
                            source={{ uri: image }}
                            style={{ height: 100, width: 100, }}
                            imageStyle={{ borderRadius: 10 }}
                        >
                            <Pressable onPress={() => setImage('')} style={styles.deleteView}>
                                <DeleteImage />
                            </Pressable>
                        </ImageBackground>
                        :
                        <Pressable onPress={SelectImage} style={styles.photoView}>
                            <AddPhoto />
                        </Pressable>
                    }
                </View>
                <View style={styles.nameSurname}>
                    <Text style={styles.name}>{name || ''}</Text>
                    <Text style={styles.position}>{position || ''}</Text>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailText}>{`Phone number: ${phone || ''}`}</Text>
                <Text style={styles.detailText}>{`e-mail: ${mail || ''}`}</Text>
                <Text style={styles.detailText}>{`Company: ${company || ''}`}</Text>
            </View>
            <Pressable onPress={() => navigation.navigate('EditProfileScreen')} style={styles.edit}>
                <Text>Edit</Text>
            </Pressable>
        </View>
    )
}
