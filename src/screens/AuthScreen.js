import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import TabNav from '../navigation/TabNav';

const AuthScreen = () => {
  return (
    <>
      
      <View style={styles.container}>
        <Image source={require('../assets/images/passman.png')} />
      </View>
      <View style={styles.tabContainer}>
        <TabNav />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20BBFF',
  },
  tabContainer: {
    flex: 7,
  },
});

export default AuthScreen;
