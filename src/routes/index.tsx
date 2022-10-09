import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { TORoutes } from './routes';

export function Routes(){
    return(
        <NavigationContainer>
            <TORoutes />
        </NavigationContainer>
    )
}