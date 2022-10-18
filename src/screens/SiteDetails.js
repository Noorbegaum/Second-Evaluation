import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {CustomPassInput} from '../components/InputField';
import {CustomInput} from '../components/InputField';
import {CustomMultilineInput} from '../components/InputField';
import { CustomButtonField } from '../components/ButtonField';
import { useRoute } from '@react-navigation/native';


const SiteDetails = () => {
  const route=useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomInput text="URL" multiline={false} value={route.params.item.link}/>
        <CustomInput text="Site Name" multiline={false} />
        <CustomPassInput
          text="Select/Folder"
          source={require('../assets/images/PathCopy.png')}
        />
        <CustomInput text="User Name" multiline={false} />
        <CustomPassInput
          text="Site Password"
          source={require('../assets/images/eye_on.png')}
        />
        <CustomMultilineInput text="Notes" multiline={true} />

      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButtonField text="Reset" />
        <CustomButtonField text="Save" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default SiteDetails;
