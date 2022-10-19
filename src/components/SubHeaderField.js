import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const SubHeaderField = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
});

export default SubHeaderField;
