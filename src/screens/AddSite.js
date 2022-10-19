import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {CustomPassInput} from '../components/InputField';
import {CustomInput} from '../components/InputField';
import {CustomMultilineInput} from '../components/InputField';
import {CustomButtonField} from '../components/ButtonField';
import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../redux/ManagerSlice';
import Toast from 'react-native-simple-toast';

const AddSite = ({navigation}) => {
  const source = require('../assets/images/Bitmap.png');
  const dispatch = useDispatch();
  const data = useSelector(state=>state.sitedata.value)

  const handleReset = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          url: '',
          sitename: '',
          folder: '',
          username: '',
          password: '',
          notes: '',
          source: source,
        }}
        onSubmit={async values => {
          const obj={
            id:data.length+1,
            url: values.url,
            sitename: values.sitename,
            folder: values.folder,
            username: values.username,
            password: values.password,
            notes: values.notes,
            source: source,
          }
          dispatch(add(obj));
          console.log(values);
          try {
            const jsonValue = JSON.stringify(values);
            await AsyncStorage.setItem('values.url', jsonValue);

            Toast.show('Successfully Added');
            navigation.navigate('AppScreen');
          } catch (err) {
            console.log(err);
          }
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <ScrollView>
              <CustomInput
                text="URL"
                multiline={false}
                name="url"
                onChangeText={handleChange('url')}
                onBlur={handleBlur('url')}
                value={values.url}
              />
              <CustomInput
                text="Site Name"
                multiline={false}
                name="sitename"
                onChangeText={handleChange('sitename')}
                onBlur={handleBlur('sitename')}
                value={values.sitename}
              />
              <CustomPassInput
                text="Select/Folder"
                source={require('../assets/images/PathCopy.png')}
                name="folder"
                onChangeText={handleChange('folder')}
                onBlur={handleBlur('folder')}
                value={values.folder}
              />
              <CustomInput
                text="User Name"
                multiline={false}
                name="username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
              <CustomPassInput
                text="Site Password"
                source={require('../assets/images/eye_on.png')}
                name="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <CustomMultilineInput text="Notes" multiline={true} />
            </ScrollView>
            <View style={styles.buttonContainer}>
              <CustomButtonField text="Reset" onPress={handleReset} />
              <CustomButtonField text="Save" onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
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
