import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native'
import {Text} from 'react-native-elements'
import {withNavigation} from 'react-navigation'

import Spacer from './Spacer'

const Navlink = (props) => {
    return (
        <TouchableOpacity onPress={()=>{props.navigation.navigate(props.routName)}}>
               <Spacer>
               <Text style={styles.link}>
                   {props.title}
               </Text>
               </Spacer>
               
           </TouchableOpacity>
    );
}
const styles= StyleSheet.create({
    link:{
        color:'blue',
        fontSize:16
    }
    })
export default withNavigation(Navlink);
