import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {UpdateButtonField} from '../components/ButtonField';
import {CustomPassInput} from '../components/InputField';
import {CustomInput} from '../components/InputField';
import {CustomMultilineInput} from '../components/InputField';

const EditSite = () => {
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
        <UpdateButtonField text="Update" />
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

export default EditSite;
