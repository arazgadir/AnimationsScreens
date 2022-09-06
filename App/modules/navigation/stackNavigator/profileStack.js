import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../../../screens/ProfileScreen';
import { EditProfileScreen } from '../../../screens/EditPorfileScreen';
const { Navigator, Screen } = createStackNavigator();


export const ProfileStack = () => {
    return (
        <Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Screen name='ProfileScreen' component={ProfileScreen} />
            <Screen name='EditProfileScreen' component={EditProfileScreen} />
        </Navigator>
    )
}
