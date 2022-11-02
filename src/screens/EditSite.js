import React, { useState } from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {UpdateButtonField} from '../components/ButtonField';
import {CustomPassInput} from '../components/InputField';
import {CustomInput} from '../components/InputField';
import {CustomMultilineInput} from '../components/InputField';
import {Formik} from 'formik';
import {edit} from '../redux/ManagerSlice';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import DropdownField from '../components/DropdownField';
import * as yup from 'yup';

const EditSite = ({navigation}) => {
  const route = useRoute();

  const source = require('../assets/images/Bitmap.png');
  const dispatch = useDispatch();
  const siteid = route.params.siteDetails.id;
  const [selected, setSelected] = useState(' ');
  const data = [
    {key: 'Social Media', value: 'Social Media'},
    {key: 'Shopping Sites', value: 'Shopping Sites'},
  ];

  const signupValidationSchema = yup.object().shape({
    url: yup.string().required(),
    sitename: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
    notes: yup.string().required(),
  });
  return (
    <SafeAreaView style={styles.container}>
      <Formik
      validationSchema={signupValidationSchema}
        initialValues={{
          url: route.params.siteDetails.url,
          sitename: route.params.siteDetails.sitename,
          folder: route.params.siteDetails.folder,
          username: route.params.siteDetails.username,
          password: route.params.siteDetails.password,
          notes: route.params.siteDetails.notes,
          source: source,
        }}
        onSubmit={async values => {
          const obj = {
            id: siteid,
            url: values.url,
            sitename: values.sitename,
            folder: selected,
            username: values.username,
            password: values.password,
            notes: values.notes,
            source: source,
          };
          dispatch(edit(obj));
          navigation.navigate('AppScreen');
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
              <DropdownField
                text="folder"
                name="folder"
                onChangeText={handleChange('folder')}
                onBlur={handleBlur('folder')}
                data={data}
                value={selected}
                style={styles.dropdown}
                setSelected={setSelected}
                placeholder = {values.folder}
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
              <CustomMultilineInput
                text="Notes"
                multiline={true}
                value={values.notes}
                onChangeText={handleChange('notes')}
              />
            </ScrollView>
            <View style={styles.buttonContainer}>
              <UpdateButtonField text="Update" onPress={handleSubmit} />
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

export default EditSite;
