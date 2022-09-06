import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import MaskInput from 'react-native-mask-input';
import {Header} from '../../components/header';
import { ProfileEdit } from '../../modules/redux/profileEdit';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';

export const EditProfileScreen = () => {
    const ProfileData = useSelector((state) => state.profile.ProfileData)
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const [name, SetName] = useState(ProfileData.name)
    const [phone, SetPhone] = useState(ProfileData.phone)
    const [mail, SetMail] = useState(ProfileData.mail)
    const [position, SetPosition] = useState(ProfileData.position)
    const [company, SetCompany] = useState(ProfileData.company)

    const Save = () => {
        if (name && position && mail && phone && company) {
            dispatch(ProfileEdit({ name, position, mail, phone, company }))
            navigation.navigate('ProfileScreen')
        }
    }

    return (
        <View style={styles.container}>
            <Header />
            <TextInput
                style={styles.input}
                onChangeText={SetName}
                value={name}
                placeholder='Name'
            />
            <TextInput
                style={styles.input}
                onChangeText={SetPosition}
                value={position}
                placeholder='Position'
            />
            <TextInput
                style={styles.input}
                onChangeText={SetMail}
                value={mail}
                placeholder='e-mail'
                keyboardType='email-address'
            />
            <MaskInput
                style={styles.input}
                placeholder='PhoneN number'
                keyboardType='phone-pad'
                value={phone}
                onChangeText={(masked) => {
                    SetPhone(masked);
                }}
                mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/,]}
            />
            <TextInput
                style={styles.input}
                onChangeText={SetCompany}
                value={company}
                placeholder='Company'
            />
            <Pressable onPress={() => Save()} style={styles.edit}>
                <Text>Save</Text>
            </Pressable>
        </View>
    )
}
