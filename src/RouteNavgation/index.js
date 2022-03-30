import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loading from '../screens/Loading';
import Main from '../screens/Main';
import About from '../screens/About';
import Appearance from '../screens/Appearance';
import Encyclopedia from '../screens/Encyclopedia';
import Result from '../screens/Result';

const stack = createNativeStackNavigator();

const RouteNavigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }}>
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
                <stack.Screen
                    name="Appearance"
                    component={Appearance}
                />
                <stack.Screen
                    name="Encyclopedia"
                    component={Encyclopedia}
                />
                <stack.Screen
                    name="Result"
                    component={Result}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteNavigation;
