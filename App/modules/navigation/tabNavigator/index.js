import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnimationScreen } from '../../../screens/AnimationScreen';
import { NewsScreen } from '../../../screens/NewsScreen';
import { ProfileIcon } from '../../../assets/svg/profile';
import { AnimationIcon } from '../../../assets/svg/animation';
import { NewsIcon } from '../../../assets/svg/news';
import { BookmarkIcon } from '../../../assets/svg/bookmark';
import {  PostScreen } from '../../../screens/HomeScreen';
import { CreatePostScreen } from '../../../screens/NewPostScreen';
import { AddPhoto } from '../../../assets/svg/addPhoto';
import { ProfileStack } from '../stackNavigator/profileStack';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator screenOptions={() => ({
            headerShown: false,
            tabBarActiveTintColor: '#807B75',
            tabBarActiveBackgroundColor: '#EEB81B',
            tabBarStyle: { height: 70 },
            tabBarItemStyle: { height: 70, borderRadius: 10 },
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: { fontSize: 15 }
        })}
        >
            <BottomTab.Screen
                name='PostScreen'
                component={PostScreen}
                options={{
                    tabBarIcon: () => <BookmarkIcon />,
                    tabBarLabel: 'Posts',
                }}
            />
            <BottomTab.Screen
                name='AnimationScreen'
                component={AnimationScreen}
                options={{
                    tabBarIcon: () => <AnimationIcon />,
                    tabBarLabel: 'Animation',
                }}
            />
            <BottomTab.Screen
                name='CreatePostScreen'
                component={CreatePostScreen}
                options={{
                    tabBarIcon: () => <AddPhoto />,
                    tabBarLabel: 'New Post',
                }}
            />
            <BottomTab.Screen
                name='NewsScreen'
                component={NewsScreen}
                options={{
                    tabBarIcon: () => <NewsIcon />,
                    tabBarLabel: 'News',
                }}
            />
            <BottomTab.Screen
                name='ProfileScreen'
                component={ProfileStack}
                options={{
                    tabBarIcon: () => <ProfileIcon />,
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle: { fontSize: 15 }
                }}
            />
        </BottomTab.Navigator>
    )
}
export default BottomTabNavigator