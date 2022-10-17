import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
    paddingTop: 39,
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
