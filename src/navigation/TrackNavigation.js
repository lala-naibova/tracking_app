import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {FontAwesome} from '@expo/vector-icons'

import TrackCreateScreen from '../screens/TrackCreateScreen';
import TrackDetailsScreen from '../screens/TrackDetailScreen';
import TrackListScreen from '../screens/TrackListScreen';
import AccountScreen from '../screens/AccountScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import InitialScreen from '../screens/InitialScreen'


const trackList = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail :TrackDetailsScreen
});

trackList.navigationOptions={
    title:'Tracks',
    tabBarIcon:<FontAwesome name='th-list' size={23}/>
}

const switchNavigator = createSwitchNavigator({
    Initial :InitialScreen,
    loginFlow: createStackNavigator({
        SignUp : SignUpScreen,
        SignIn : SignInScreen,
    }),
    mainFlow: createBottomTabNavigator({
        TrackListFlow: trackList,
        TrackCreate : TrackCreateScreen,
        Account : AccountScreen
    })
})
export default createAppContainer(switchNavigator)