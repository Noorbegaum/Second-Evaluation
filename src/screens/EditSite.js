import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {UpdateButtonField} from '../components/ButtonField';
import {CustomPassInput} from '../components/InputField';
import {CustomInput} from '../components/InputField';
import {CustomMultilineInput} from '../components/InputField';
import {Formik} from 'formik';
import {edit} from '../redux/ManagerSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

const EditSite = ({navigation}) => {
  const route = useRoute();

  const source = require('../assets/images/Bitmap.png');
  const dispatch = useDispatch();
  const siteid = route.params.siteDetails.id;

  return (
    <SafeAreaView style={styles.container}>
      <Formik
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
          const obj={
            id:siteid,
            url: values.url,
            sitename: values.sitename,
            folder: values.folder,
            username: values.username,
            password: values.password,
            notes: values.notes,
            source: source,
          }
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
