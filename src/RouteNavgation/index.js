import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loading from '../screens/Loading';
import Main from '../screens/Main';
import About from '../screens/About';

const stack = createNativeStackNavigator();

const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

const RouteNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown: false}}>
                <stack.Screen
                    name="Loading"
                    component={Loading}
                />
                <stack.Screen 
                    name="Main"
                    component={Main}
                />
                <stack.Screen
                    name="About"
                    component={About}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteNavigation;
