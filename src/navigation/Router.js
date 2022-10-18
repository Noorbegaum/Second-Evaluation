import React from 'react';
import AuthScreen from '../screens/AuthScreen.js';
import AppScreen from '../screens/AppScreen.js';
import AddSite from '../screens/AddSite.js';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditSite from '../screens/EditSite.js';
import SiteDetails from '../screens/SiteDetails.js';
import {Button, View, StyleSheet, Image, Pressable,Text } from 'react-native';

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
          options={({navigation}) => ({
            title: ' ',
            headerStyle: {
              backgroundColor: '#0E85FF',
            },
            headerTintColor: '#FFFFFF',
            headerBackTitleVisible: false,
            headerLeft: () => (
              <View style={styles.headerMenu}>
                <Image source={require('../assets/images/burger_menu.png')} />
                <Image
                  source={require('../assets/images/PASSMANAGER.png')}
                  style={styles.content}
                />
              </View>
            ),
            headerRight: () => (
              <View style={styles.headerIcons}>
                <Image
                  source={require('../assets/images/search.png')}
                  style={styles.contentIcon}
                />
                <Image
                  source={require('../assets/images/sync_icn.png')}
                  style={styles.contentIcon}
                />
                <Image
                  source={require('../assets/images/profile.png')}
                  style={styles.contentIcon}
                />
              </View>
            ),
          })}
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
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: '#0E85FF',
            },
            headerTintColor: '#FFFFFF',
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Edit Site')}
              ><Text style={styles.editText}>Edit</Text></Pressable>
            ),
          })}
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
  editText:{
    color: '#FFFFFF',
    fontWeight:'bold',
    fontSize:20,
  }
});
