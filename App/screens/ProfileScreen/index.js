import React, { useState } from 'react';
import { View, ImageBackground, Pressable, Text } from 'react-native';
import { styles } from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import { AddPhoto } from '../../assets/svg/addPhoto';
import { DeleteImage } from '../../assets/svg/deleteImage';



export const ProfileScreen = () => {

    const [image, setImage] = useState('')


    const SelectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
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
                            imageStyle={{ borderRadius: 55 }}
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
                    <Text>Name Surname</Text>
                    <Text>Position</Text>

                </View>


            </View>

        </View>
    )
}
