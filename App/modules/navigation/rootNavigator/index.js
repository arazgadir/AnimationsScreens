import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '../tabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = ()  => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Group  screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Home" component={BottomTabNavigator} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
)

export default RootNavigator;
