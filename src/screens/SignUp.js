import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {InputField} from '../components/InputField';
import {PasswordInput} from '../components/InputField';
import {ButtonField} from '../components/ButtonField';
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

const SignUp = ({navigation}) => {
  const signupValidationSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid mobile number')
      .required('Mobile number is required'),
    mpin: yup
      .string()
      .matches(/(\d){4}\b/, 'mPin must have a number')
      .max(4, ({max}) => `mPin must be${max} of characters`)
      .required('mPin is required'),
    conformmpin: yup
      .string()
      .oneOf([yup.ref('mpin')], 'mPin do not match')
      .required('Confirm mPin is required'),
  });

  return (
    <LinearGradient colors={['#20BBFF', '#0E85FF']} style={styles.container}>
      <Formik
        validationSchema={signupValidationSchema}
        initialValues={{phoneNumber: '', mpin: '', conformmpin: ''}}
        onSubmit={async values => {
          try {
            const jsonValue = JSON.stringify(values);
            await AsyncStorage.setItem(values.phoneNumber, jsonValue);
            Toast.show(`Congrats!!! Success \n Signin to access the vault `);
            navigation.navigate('Sign In');
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
                placeholder="Enter Mobile Number"
                keyboardType="numeric"
                placeholderTextColor="grey"
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
              />
              {errors.phoneNumber && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.phoneNumber}
                </Text>
              )}
              <InputField
                name="mpin"
                placeholder="Enter 4 digit Mpin"
                onChangeText={handleChange('mpin')}
                placeholderTextColor={'grey'}
                onBlur={handleBlur('mpin')}
                value={values.mpin}
                secureTextEntry
                keyboardType="numeric"
              />
              {errors.mpin && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.mpin}</Text>
              )}
              <PasswordInput
                placeholder="Re-Enter 4 digit MPin"
                source={require('../assets/images/eye_on.png')}
                name="confirmmpin"
                onChangeText={handleChange('conformmpin')}
                placeholderTextColor={'grey'}
                onBlur={handleBlur('conformmpin')}
                value={values.conformmpin}
                secureTextEntry
                keyboardType="numeric"
              />
              {errors.conformmpin && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.conformmpin}
                </Text>
              )}
            </View>
            <ButtonField
              text="SIGN IN"
              onPress={handleSubmit}
              disabled={!isValid}
            />
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
    height: 296,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
