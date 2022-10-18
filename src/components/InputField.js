import React from 'react';
import {TextInput, StyleSheet, View, Image, Text} from 'react-native';

export const InputField = ({placeholder, keyboardType}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      keyboardType={keyboardType}
    />
  );
};

export const PasswordInput = ({placeholder, source}) => {
  return (
    <View style={styles.passwordContainer}>
      <TextInput
        placeholder={placeholder}
        keyboardType="numeric"
        style={styles.passInput}
      />
      <Image source={source} />
    </View>
  );
};
export const CustomPassInput = ({text, source}) => {
  return (
    <View>
    <Text style={styles.text}>{text}</Text>
    <View style={styles.customPasswordContainer}>     
      <TextInput
        style={styles.customPassInput}
      />
      <Image source={source} />
    </View>
    </View>
  );
};

export const CustomInput = ({text,multiline,value}) => {
  return (
    <View>
    <Text style={styles.text}>{text}</Text>
    <TextInput
      style={styles.customInput}
      multiline={multiline}
      value={value}
    />
    </View>
  );
};

export const CustomMultilineInput = ({text,multiline}) => {
  return (
    <View>
    <Text style={styles.text}>{text}</Text>
    <TextInput
      style={styles.customMultilineInput}
      multiline={multiline}
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
    margin: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems:'center',
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
    width: '90%',
  },
  customContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#F5F7FB',
    height: 54,
    width: '85%',
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 15,
    borderColor: '#D7D7D7',
  },
  customInput:{
      height: 54,
      width: '85%',
      paddingHorizontal: 20,
      alignSelf: 'center',
      backgroundColor: '#F5F7FB',
      borderWidth: 0.5,
      borderColor: '#D7D7D7',
      borderRadius: 5,
      fontSize: 18,
      margin: 15,
  },
  text:{
    marginHorizontal:30,
    color:'#949CA5',
    fontSize:18,
    marginTop:10,
  },
  customPasswordContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F7FB',
    alignItems:'center',
    alignSelf:'center',
    height: 54,
    width: '85%',
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderColor: '#D7D7D7',
    borderRadius: 5,
    margin: 15,
  },
  customPassInput: {
    fontWeight: 'bold',
    fontSize: 18,
    width: '90%',
  },
  customMultilineInput:{
    height: 95,
    width: '85%',
    paddingHorizontal: 20,
    alignSelf: 'center',
    backgroundColor: '#F5F7FB',
    borderWidth: 0.5,
    borderColor: '#D7D7D7',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 18,
    margin: 15,
},
});
