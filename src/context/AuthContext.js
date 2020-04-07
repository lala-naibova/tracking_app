import {AsyncStorage} from 'react-native'
import createContextData from './createContextData'
import trackerApi from '../api/traker'
import {navigate} from '../refnavigation'

const authReducer = (state, action)=>{
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage : action.payload}
        case 'signin':
            return {errorMessage:'', token : action.payload}
        case 'clearErrormessage':
            return {...state, errorMessage:''}
        case 'signout':
            return {token :null, errorMessage:''}
        default:
            return state
    }
}

const tryLocalSigning = (dispatch) => async()=>{
const token = await AsyncStorage.getItem('token');
if (token) {
    dispatch({type:'signin', payload:token});
    navigate('TrackList')
}
else{
    navigate('SignUp')
}
}

const clearErrormessage = (dispatch) =>()=>{
    dispatch({type:'clearErrormessage'})
}

const signin =(dispatch)=>{
    return async ({email, password})=>{
        try {
            const response = await trackerApi.post('/signin',{email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signin', payload : response.data.token});
            navigate('TrackList')
        } catch (error) {
            console.log(error.response.data);  
            dispatch({type:'add_error',payload: 'Something went wrong with signup'}) 
        } 
    }
}    

const signup = dispatch => async ({email, password})=>{
        try {
            const response = await trackerApi.post('/signup',{email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signin', payload : response.data.token});
            navigate('TrackList')
        } catch (error) {
            console.log(error.response.data);  
            dispatch({type:'add_error',payload: 'Something went wrong with signup'}) 
        } 
    }


const signout =(dispatch)=>{
    return async()=>{
        await AsyncStorage.removeItem('token');
        dispatch({type:'signout'});
        navigate('loginFlow')
    }
}

export const {Provider, Context} = createContextData(
    authReducer,
    { signin, signout, signup, clearErrormessage, tryLocalSigning},
    { token : null , errorMessage:''})