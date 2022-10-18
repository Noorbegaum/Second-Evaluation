import React from 'react';
import {View, StyleSheet } from 'react-native';
import {InputField} from '../components/InputField';
import {PasswordInput} from '../components/InputField';
import {ButtonField} from '../components/ButtonField';
import LinearGradient from 'react-native-linear-gradient';
const SignUp = ({navigation}) => {
  const handlePress = () => {
    alert('Congrats!!! Success');
    navigation.navigate('AppScreen');
  };
  return (
    <LinearGradient colors={['#20BBFF', '#0E85FF']} style={styles.container}>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Enter Mobile Number"
            keyboardType="numeric"
          />
          <InputField placeholder="Enter 4 digit MPin" keyboardType="numeric" />
          <PasswordInput
            placeholder="Re-Enter 4 digit MPin"
            source={require('../assets/images/eye_on.png')}
          />
        </View>
        <ButtonField text="SIGN IN" onPress={handlePress} />
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
