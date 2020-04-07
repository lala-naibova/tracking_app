import React,{ useContext} from 'react';
import {View, StyleSheet} from 'react-native'
import {NavigationEvents} from 'react-navigation'

import Navlink from '../components/Navlink'
import {Context as AuthContext} from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignInScreen = (props) => {
    const {state, signin, clearErrormessage} = useContext(AuthContext);
    return (
       <View style={styles.container}>
           <NavigationEvents
           onWillBlur={clearErrormessage}/>
           <AuthForm title='Sign in to your account'
           onSubmit={signin}
           buttonName='SIGN IN'
           errorMessage={state.errorMessage}/>
           <Navlink 
           routName='SignUp'
           title="Don't have an account? Sign up instead"/>
       </View>
    );
}
SignInScreen.navigationOptions= navData =>{
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
export default SignInScreen;
