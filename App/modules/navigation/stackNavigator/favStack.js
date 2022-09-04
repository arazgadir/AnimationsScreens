import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HeroScreen from '../../../views/HeroScreen';
import FavScreen from '../../../views/FavScreen';
const { Navigator, Screen } = createStackNavigator();


const FavStack = () => {
    return (
        <Navigator>
            <Screen name='HeroScreen' component={HeroScreen}/>
            <Screen name='AddFav' component={FavScreen}/>
        </Navigator>
    )
}

export default FavStack