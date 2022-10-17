import React from 'react';
import {TextInput, StyleSheet, View, Image} from 'react-native';

export const InputField = ({placeholder,keyboardType}) => {
  return (

   
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      keyboardType={keyboardType}

    />
 
  );
};

export const PasswordInput = ({placeholder,source}) => {
    return (
        <View style={styles.passwordContainer}>
        <TextInput
          placeholder={placeholder}
          keyboardType="numeric"
          style={styles.passInput}
        />
        <Image
          source={source}
        />
      </View>
    );
};

const styles = StyleSheet.create({
 
    textInput: {
      height: 54,
      width: '85%',
      paddingHorizontal: 20,
      backgroundColor: 'white',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 5,
      fontWeight: 'bold',
      fontSize: 18,
      margin:15,
   
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 54,
        width: '85%',
        paddingHorizontal: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        margin: 15,
      },
      passInput: {
        fontWeight: 'bold',
        fontSize: 18,
        width:'90%',
      },
    
  });
  
