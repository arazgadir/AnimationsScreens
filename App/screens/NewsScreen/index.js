import React, { useEffect } from 'react';
import { View, FlatList, Text, Image, ScrollView } from 'react-native';
import { fetchNews } from '../../modules/redux/news';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';

export const NewsScreen = () => {

    const NewsData = useSelector((state) => state.news.newsData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews())
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.dataView}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: item.thumbnail,
                }}
            />
            <View style={styles.infoProduct}>
                <View style={{ width: '80%' }}>
                    <Text style={styles.PorductTitle}>{item.brand}</Text>
                    <Text style={styles.PorductDescription}>{item.description}</Text>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    style={{ top: 20 }}>


                    <Image
                        style={styles.downLogo}
                        source={{
                            uri: item.images[0],
                        }}
                    />
                    <Image
                        style={styles.downLogo}
                        source={{
                            uri: item.images[1],
                        }}
                    />
                    <Image
                        style={styles.downLogo}
                        source={{
                            uri: item.images[2],
                        }}
                    />
                    <Image
                        style={styles.downLogo}
                        source={{
                            uri: item.images[3],
                        }}
                    />
                    <Image
                        style={styles.downLogo}
                        source={{
                            uri: item.images[4],
                        }}
                    />
                    <Image
                        style={styles.downLogo}
                        source={{
                            uri: item.images[5],
                        }}
                    />
                </ScrollView>
                <Text style={styles.price}>{`Model: ${item.title} `}</Text>
                <Text style={styles.price}>{`Price: ${item.price} $`}</Text>
            </View>

        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.flatListView}
                data={NewsData.products}
                renderItem={renderItem}
            />
        </View>
    )
}
