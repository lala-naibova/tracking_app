import React,{useContext} from 'react';
import {View, StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import MapView, {Polyline} from 'react-native-maps'

import {Context as TrackContext} from '../context/TrackContext'

const TrackDetailScreen = (props) => {
    const {state} = useContext(TrackContext);
    const _id = props.navigation.getParam('_id');
    const track = state.find(item=>item._id === _id); 
    const initialCoords  = track.locations[0].coords;
    
    return (
        <View>
            <Text h1> {track.name} </Text>
            <MapView style={styles.map}
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta : 0.01,
                ...initialCoords
            }}>
                <Polyline coordinates={track.locations.map(m=>m.coords)}/>
            </MapView>
        </View>
    );
}
const styles= StyleSheet.create({
    map:{
        height:200
    }
})
export default TrackDetailScreen;
