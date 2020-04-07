import React,{useContext} from 'react';
import {Text, StyleSheet} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {Button} from 'react-native-elements'
import {FontAwesome} from '@expo/vector-icons'

import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'

const AccountScreen = () => {
    const {signout}= useContext(AuthContext)
    return (
        <SafeAreaView
        forceInset={{top:'always'}}>
            <Text style={styles.text}>
                Account Screen
            </Text>
            <Spacer>
                <Button
                title='SIGN OUT'
                onPress={signout}/>
            </Spacer>
            
        </SafeAreaView>
    );
}
const styles= StyleSheet.create({
text:{
    fontSize:21,
    textAlign:'center',
    marginTop:5
}
});

AccountScreen.navigationOptions = {
    title:'Account',
    tabBarIcon: <FontAwesome name='gear' size={23}/>
}
export default AccountScreen;
