import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {ButtonField} from '../components/ButtonField';
import {InputField} from '../components/InputField';
import {CustomPassInput} from '../components/InputField';
import {CustomInput} from '../components/InputField';
import {CustomMultilineInput} from '../components/InputField';
import { CustomButtonField } from '../components/ButtonField';


const AddSite = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomInput text="URL" multiline={false} />
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

export default AddSite;
