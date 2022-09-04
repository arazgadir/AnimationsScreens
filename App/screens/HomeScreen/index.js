import { useNavigation } from '@react-navigation/core';
import React, {  useEffect } from 'react'
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Logo } from '../../assets/svg/logo'
import Button from '../../components/button'
import { RootState } from '../../modules/redux/store';
import { HomeDataSection } from './homeDataSection';
import { styles } from './styles'

export const PostScreen = () => {
    const navigation = useNavigation();
    const PostData  = useSelector((state) => state.post.postData)

    const renderItem = ({ item }) => (
        <HomeDataSection
        id={item.id}
        title={item.title}
        image={item.image}
        date={item.date}
        status={item.status}
        description={item.description}
        />
        );
        
        return (
            <View style={styles.container}>
            <View style={styles.logo}>
                <Logo />
            </View>
            <View style={styles.flatListView}>
                <FlatList
                    data={PostData}
                    renderItem={renderItem}
                />
            </View>
            <Button
                onPress={() => navigation.navigate('CreatePostScreen')}
                text='New Post' />
        </View>
    )
}
