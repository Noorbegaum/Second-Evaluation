import React from 'react';
import AuthScreen from '../screens/AuthScreen.js';
import AppScreen from '../screens/AppScreen.js';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator>
        <Stack.Screen
          name="AuthScreen"
          options={{header: () => null}}
          component={AuthScreen}
        />
        <Stack.Screen
          name="AppScreen"
          component={AppScreen} 
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
