import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.headerMenu}>
          <Image source={require('../assets/images/burger_menu.png')} />
          <Image
            source={require('../assets/images/PASSMANAGER.png')}
            style={styles.content}
          />
        </View>
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
      </View>
      <Text>AppScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 25,
  },
  contentIcon: {
    marginLeft: 35,
  },
  headerIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AppScreen;
