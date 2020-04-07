import React from 'react';

import Navigation from './src/navigation/TrackNavigation'
import {Provider as AuthProvider} from './src/context/AuthContext'
import {Provider as LocationProvider} from './src/context/LocationContext'
import {Provider as TrackProvider} from './src/context/TrackContext'
import { setNavigation } from './src/refnavigation';

export default function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
              <Navigation ref={(navigator)=>{setNavigation(navigator)}}/>
        </AuthProvider>
      </LocationProvider> 
    </TrackProvider>
  );
}


