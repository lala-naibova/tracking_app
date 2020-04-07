import {useState, useEffect} from 'react';
import {requestPermissionsAsync, Accuracy,watchPositionAsync} from 'expo-location'

export default (shouldTrack, callback)=>{
    const [err, setErr] = useState(null);
    let subscriber;
    useEffect(()=>
    {
        const startWatching = async()=>
        {
            try 
            {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval:10
                }, callback);
            } catch (error) 
            {
                setErr(error) 
            }
        }

        if (shouldTrack) 
        {
            startWatching();
        }
        else
        {
            if (subscriber) 
            {
                subscriber.remove();
            }
            subscriber=null;
        }
        return ()=>
        {
            
            if (subscriber) 
            {
                subscriber.remove();
            }
        }
    },[shouldTrack, callback, subscriber])

    return [err]
}