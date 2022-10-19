import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {InputField} from '../components/InputField';
import {PasswordInput} from '../components/InputField';
import {ButtonField} from '../components/ButtonField';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

const SignIn = ({navigation}) => {


  const signinValidationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid mobile number')
      .required('Mobile Number is Required'),
    mpin: yup
      .string()
      .matches(/(\d){4}\b/, 'mPin must have a number')
      .max(4, ({max}) => `mPin must be${max} of characters`)
      .required('MPin is required'),
  });


  return (
    <LinearGradient colors={['#20BBFF', '#0E85FF']} style={styles.container}>
      <Formik
        validationSchema={signinValidationSchema}
        initialValues={{phoneNumber: '', mpin: ''}}
        onSubmit={async values => {
          console.log(values);
          try {
            const jsonValue = await AsyncStorage.getItem(values.phoneNumber);
            if (jsonValue != null) {
              parseValue = JSON.parse(jsonValue);

              if (
                values.phoneNumber === parseValue.phoneNumber &&
                values.mpin === parseValue.mpin
              ) {
                Toast.show('Successfully Logged In');
                navigation.navigate('AppScreen');
              } else {
                Toast.show('Enter Correct Mobile Number and MPin');
              }
            }
          } catch (err) {
            console.log(err);
          }
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <InputField 
              name="phoneNumber"
              placeholder="Mobile Number" 
              placeholderTextColor={'grey'}
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              keyboardType="number-pad"
              value={values.phoneNumber}
              />
              {errors.phoneNumber && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.phoneNumber}
                </Text>
              )}
              <PasswordInput
                name="mpin"
                placeholder="MPin"
                source={require('../assets/images/eye_on.png')}
                onChangeText={handleChange('mpin')}
                placeholderTextColor={'grey'}
                onBlur={handleBlur('mpin')}
                value={values.mpin}
                keyboardType="number-pad"
              />
               {errors.mpin && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.mpin}</Text>
              )}
            </View>
            <Pressable>
            <Text style={styles.forgotText}>Forgot your passsword?</Text>
            </Pressable>
            <ButtonField text="SIGN IN" onPress={handleSubmit} disabled={!isValid}/>

            <View style={styles.fingerprintContainer}>
              <Image
                source={require('../assets/images/fingerprint_icon.png')}
                style={styles.fingerprint}
              />
              <Text style={styles.fingerprintTextContainer}>
                <Text style={styles.orText}>OR </Text>
                <Text> USE YOUR FINGERPRINT TO LOGIN</Text>
              </Text>
            </View>
          </>
        )}
      </Formik>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 128, 255)',
  },
  inputContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotText: {
    paddingStart: 35,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 13,
    marginBottom: 50,
  },
  fingerprintContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  fingerprintTextContainer: {
    flexDirection: 'row',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
  },
  orText: {
    fontSize: 20,
  },
});

export default SignIn;
