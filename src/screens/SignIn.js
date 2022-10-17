import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {InputField} from '../assets/components/InputField';
import {PasswordInput} from '../assets/components/InputField';
import ButtonField from '../assets/components/ButtonField';
import LinearGradient from 'react-native-linear-gradient';
const SignIn = ({navigation}) => {
  const handlePress = () => {
    alert('Congrats!!! Success');
    navigation.navigate('AppScreen');
  };
  return (
    <LinearGradient colors={['#20BBFF', '#0E85FF']} style={styles.container}>
        <View style={styles.inputContainer}>
          <InputField placeholder="Mobile Number" keyboardType="numeric" />
          <PasswordInput
            placeholder="MPin"
            source={require('../assets/images/eye_on.png')}
          />
        </View>

        <Text style={styles.forgotText}>Forgot your passsword?</Text>

        <ButtonField text="SIGN IN" onPress={handlePress} />

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
