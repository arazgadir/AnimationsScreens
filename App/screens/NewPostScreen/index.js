import React, { useState } from 'react'
import { View, Text, Pressable, TextInput, ImageBackground, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import Button from '../../components/button';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import { PostData } from '../../modules/redux/post';
import { CurrentDate } from '../../components/currentDate';
import ImagePicker from 'react-native-image-crop-picker';
import { DeleteImage } from '../../assets/svg/deleteImage';
import { AddPhoto } from '../../assets/svg/addPhoto';


export const CreatePostScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const id = new Date().toISOString()
    
    const setPost = () => {
        let date = CurrentDate()
        return (
            dispatch(PostData({ id, title, image, date, status, description })),
            setImage(''),
            setTitle(''),
            setDescription(''),
            setStatus(''),
            navigation.goBack()
        )
    }
    const [image, setImage] = useState('')
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [status, setStatus] = useState('select');
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Draft', value: 'Draft' },
        { label: 'Published', value: 'Published' }
    ]);


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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.postContent}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitle}
                        value={title}
                        placeholder='Title'
                    />
                    <DropDownPicker
                        open={open}
                        value={status}
                        items={items}
                        setOpen={setOpen}
                        setValue={setStatus}
                        setItems={setItems}
                        style={styles.statusInput}
                        containerStyle={styles.containerStatus}
                    />
                    <TextInput
                        style={styles.descriptInput}
                        onChangeText={setDescription}
                        value={description}
                        placeholder='Description'
                        multiline
                    />
                </View>
                <View style={styles.postPhoto}>
                    <Text style={styles.postPhotoText}> Photo </Text>
                    {image ?
                        <ImageBackground
                            source={{ uri: image }}
                            style={{ height: 80, width: 80 }}
                            imageStyle={{ borderRadius: 8 }}
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
                <Button
                    onPress={() =>
                        image && title && status && description ?
                            setPost()
                            :
                            Alert.alert("Fill empty fields",)
                    }
                    text='Submit' />
            </View>
        </TouchableWithoutFeedback>
    )
}

