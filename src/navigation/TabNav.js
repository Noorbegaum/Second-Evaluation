import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Tab = createMaterialTopTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 50,
          backgroundColor: '#20BBFF',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#FFA222',
          marginLeft: 55,
          width: 86,
          height: 4,
          borderRadius: 3.5,
          marginVertical: -3,
          borderRadius: 1,
          borderColor: 'black',
        },
        tabBarLabelStyle: {
          fontSize: 20,
          fontWeight: '600',
          color: 'white',
          letterSpacing: 1.2,
        },
      }}>
      <Tab.Screen name="Sign In" component={SignIn} />
      <Tab.Screen name="Sign Up" component={SignUp} />
    </Tab.Navigator>
  );
};

export default TabNav;
