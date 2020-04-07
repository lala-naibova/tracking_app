//import '../_mockLocation';
import React,{useContext, useCallback} from 'react';
import {Text} from 'react-native-elements'
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import {FontAwesome} from '@expo/vector-icons'

import Map from '../components/Map'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({isFocused}) => {
    const {addLocation, state:{recording}} = useContext(LocationContext);
    const callback = useCallback((location)=>{
        addLocation(location, recording)
    },[recording])
    const [err] = useLocation(isFocused || recording, callback);
    return (
        <SafeAreaView
        forceInset={{top:'always'}}>
            <Text h3>Create a Track</Text>
            <Map/>
            {err?<Text>Please enable location services</Text>:null}
            <TrackForm/>
        </SafeAreaView>
    );
}
TrackCreateScreen.navigationOptions = navData=>{
    return{
        title: 'Add track',
        tabBarIcon:<FontAwesome name='plus' size={23}/>
    }
}
export default withNavigationFocus(TrackCreateScreen);
