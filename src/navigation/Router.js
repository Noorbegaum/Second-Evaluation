import React, { useState } from 'react';
import AuthScreen from '../screens/AuthScreen.js';
import AppScreen from '../screens/AppScreen.js';
import AddSite from '../screens/AddSite.js';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditSite from '../screens/EditSite.js';
import SiteDetails from '../screens/SiteDetails.js';
import {View, StyleSheet, Image, Pressable, Text} from 'react-native';
import RenderButton from '../components/RenderButton.js';
import SubHeaderField from '../components/SubHeaderField.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

function Router() {

  // const jsonValue = AsyncStorage.getItem('values.url');
  // const  parseValue = JSON.parse(jsonValue);
  // console.log("hiiiiiii",JSON.parse(jsonValue))

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
          options={{
            headerShown: false,    
          }}
        />
        <Stack.Screen
          name="Edit Site"
          component={EditSite}
          options={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#0E85FF',
            },

            headerTintColor: '#fff',
            headerShadowVisible: true,
          }}
        />
        <Stack.Screen
          name="Site Details"
          component={SiteDetails}
          options={{
            headerShown: false,    
          }}
        />
        <Stack.Screen
          name="Add Site"
          component={AddSite}
          options={{
            headerStyle: {
              backgroundColor: '#0E85FF',
            },
            headerTintColor: '#fff',
            headerShadowVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

const styles = StyleSheet.create({
  contentIcon: {
    marginLeft: 35,
  },
  headerIcons: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 25,
  },
  editText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
