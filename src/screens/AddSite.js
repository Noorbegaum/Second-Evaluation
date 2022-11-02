import React, { useEffect, useState } from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import {CustomDropInput, CustomPassInput} from '../components/InputField';
import {CustomInput} from '../components/InputField';
import {CustomMultilineInput} from '../components/InputField';
import {CustomButtonField} from '../components/ButtonField';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../redux/ManagerSlice';
import Toast from 'react-native-simple-toast';
import DropdownField from '../components/DropdownField';
import uuid from 'react-native-uuid';

const twitter = require('../assets/images/Twitter.png')
const youtube = require('../assets/images/YouTube.png')
const insta = require('../assets/images/Insta.png')


const images = [twitter,youtube,insta]

const AddSite = ({navigation}) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
   const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setCurrentImageIndex(randomNumber);
  }
  useEffect(() => changeImage(), [])
  const source = images[currentImageIndex];

  const dispatch = useDispatch();

  const [selected, setSelected] = useState(' ');

  const dropdownData = [
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
          url: '',
          sitename: '',
          folder: '',
          username: '',
          password: '',
          notes: '',
          source: source,
        }}
        onSubmit={async values => {
          const obj = {
            id: uuid.v4(),
            url: values.url,
            sitename: values.sitename,
            folder: selected,
            username: values.username,
            password: values.password,
            notes: values.notes,
            source: source,
          };
          dispatch(add(obj));
       
          try {
            const jsonValue = JSON.stringify(values);
            await AsyncStorage.setItem('values.url', jsonValue);

            Toast.show('Successfully Added');
            navigation.navigate('AppScreen');
          } catch (err) {
            console.log(err);
          }
        }}>
        {({handleChange, handleBlur, handleSubmit, values,resetForm}) => (
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
                data={dropdownData}
                value={selected}
                setSelected={setSelected}
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
              <CustomButtonField text="Reset" onPress={resetForm} />
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
  passInput:{
    flexDirection: 'row',
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    alignSelf: 'center',
    height: 54,
    width: '85%',
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderColor: '#D7D7D7',
    borderRadius: 5,
    margin: 15,
  }
});

export default AddSite;
