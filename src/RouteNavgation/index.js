import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loading from '../screens/Loading';
import Main from '../screens/Main';
import About from '../screens/About';
import Camera from '../screens/Camera';

const stack = createNativeStackNavigator();


const RouteNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name="Loading"
                    component={Loading}
                    options={{ headerShown: false }}
                />
                <stack.Screen 
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name="About"
                    component={About}
                    options={{ headerShown: false }}
                />
                <stack.Screen
                    name='Camera'
                    component={Camera}
                    options={{ headerShown: false }}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteNavigation;
