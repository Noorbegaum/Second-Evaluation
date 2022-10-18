import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import SiteList from '../components/SiteList';

const AppScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#0E85FF"
      />
      <View style={styles.subHeader}>
        <View>
          <Text style={styles.sites}>Sites</Text>
          <View style={styles.borderBottom}></View>
        </View>
        <View style={styles.rightsubHeader}>
          <Text style={styles.socialMedia}>Social Media</Text>
          <View style={styles.oval}>
            <Text style={styles.number}>07</Text>
          </View>
          <Image
            source={require('../assets/images/PathCopy.png')}
            style={styles.dropdown}
          />
        </View>
      </View>
      <SiteList navigation={navigation} />
      <TouchableOpacity
        title="add"
        style={styles.button}
        onPress={() => {
          navigation.navigate('Add Site');
        }}>
        <Image
          source={require('../assets/images/add_btn.png')}
          style={styles.addButton}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  subHeader: {
    flexDirection: 'row',
    backgrounColor: '#FAFAFA',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 10,
  },
  borderBottom: {
    borderBottomWidth: 4,
    height: 3.2,
    width: 30,
    borderBottomColor: '#FFA136',
    borderRadius: 1.6,
    marginLeft: 10,
  },
  rightsubHeader: {
    flexDirection: 'row',
  },
  sites: {
    height: 33,
    width: 55,
    color: '#3C4857',
    fontSize: 24,
    lineHeight: 33,
    marginHorizontal: 10,
  },
  socialMedia: {
    color: '#3C4857',
    fontSize: 19.2,
    lineHeight: 27,
  },
  number: {
    height: 22,
    width: 19,
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
  },
  oval: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 29,
    width: 29,
    backgroundColor: '#0E85FF',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  dropdown: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 7.15,
    width: 11.2,
    margin: 10,
  },
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 150,
  },
  addButton: {
    resizeMode: 'contain',
    width: 48,
    height: 48,
  },
});

export default AppScreen;
