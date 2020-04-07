import React,{useState} from 'react';
import {StyleSheet} from 'react-native'
import {Text, Button, Input} from 'react-native-elements'

import Spacer from './Spacer'

const AuthForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
        <Spacer>
             <Text h3>{props.title}</Text>
         </Spacer>
             <Input 
             value={email}
             onChangeText={setEmail}
             autoCapitalize='none'
             autoCorrect={false}
             label='Email'/>
          <Spacer/>
             <Input 
             secureTextEntry
             value={password}
             onChangeText={setPassword}
             autoCapitalize='none'
             autoCorrect={false}
             label='Password'/>
         {props.errorMessage? <Text style={styles.errorMessage}>{props.errorMessage}</Text>: null}
         <Spacer>
             <Button title={props.buttonName} onPress={()=>props.onSubmit({email,password})}/>
        </Spacer>

    </>
    );
}

const styles= StyleSheet.create({
    errorMessage:{
    fontSize:16,
    color:'red',
    marginLeft:15,
    marginTop:15
    },
    })

export default AuthForm;
