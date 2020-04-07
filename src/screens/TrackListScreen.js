import React,{useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {ListItem} from 'react-native-elements'
import {NavigationEvents} from 'react-navigation'

import {Context as TrackContext} from '../context/TrackContext'

const TrackListScreen = (props) => {
    const {state, fetchTracks} = useContext(TrackContext);
    return (
        <View>
            <NavigationEvents
            onWillFocus={fetchTracks}/>
            <FlatList
            data={state}
            keyExtractor={(item)=>item._id}
            renderItem={itemData=>{
                return <TouchableOpacity onPress={()=>{
                    props.navigation.navigate('TrackDetail',{_id:itemData.item._id})
                }}>
                    <ListItem
                    chevron
                    title={itemData.item.name}
                     key={itemData.item._id}/>
                </TouchableOpacity>
            }}
            />
        </View>
    );
}
TrackListScreen.navigationOptions = navData=>{
    return {
        title:'Tracks'
    }
}
export default TrackListScreen;
