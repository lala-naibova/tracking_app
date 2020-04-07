import React, {useContext, useEffect} from 'react';

import {Context as AuthContext} from '../context/AuthContext'

const InitialScreen = () => {
    const {tryLocalSigning} = useContext(AuthContext);
    useEffect(()=>{
        tryLocalSigning();
    },[])
    return null;
}

export default InitialScreen;
