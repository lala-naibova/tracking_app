import React,{useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native'
import {Input, Button} from 'react-native-elements'

import Spacer from './Spacer'
import {Context as LocationContext} from '../context/LocationContext'
import useSaveTrack from '../hooks/useTrackSave'

const TrackForm = () => {
    const {state:{ name, recording, locations}, 
        changeName, 
        startRecording,
        stopRecording} = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return (
        <View>
            <Spacer>
                <Input 
                value={name}
                onChangeText={changeName}
                placeholder='Enter name'/>
            </Spacer>
            {recording? <Button title='STOP'
            onPress={stopRecording}/>:
            <Button title='START RECORDING'
            onPress={startRecording}/>}
            <Spacer/>
            {!recording && locations.length ? <Button 
            onPress={saveTrack}
            title='Save track'/>: null}
            
        </View>
    );
}
const styles= StyleSheet.create({

})
export default TrackForm;
