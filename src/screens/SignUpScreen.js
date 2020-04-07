import React,{ useContext} from 'react';
import {View, StyleSheet} from 'react-native'
import {NavigationEvents} from 'react-navigation'

import Navlink from '../components/Navlink'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignUpScreen = (props) => {
    const {state, signup, clearErrormessage} = useContext(AuthContext);

    return (
       <View style={styles.container}>
           <NavigationEvents
           onWillBlur={clearErrormessage}/>
           <AuthForm title='Sign up for Tracker'
           onSubmit={signup}
           buttonName='SIGN UP'
           errorMessage={state.errorMessage}/>
           <Navlink 
           routName='SignIn'
           title='Already have an account? Sign in instead'/>
       </View>
    );
}

SignUpScreen.navigationOptions= navData =>{
    return{
        header: ()=>{ return null}
    }
}
const styles= StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    marginBottom:200
},
link:{
    color:'blue',
    fontSize:16
}
})
export default SignUpScreen;
