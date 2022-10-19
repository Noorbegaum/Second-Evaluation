import React from 'react';
import {TextInput, StyleSheet, View, Image, Text} from 'react-native';

export const InputField = props => {
  return (
    <TextInput
      name={props.name}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      onChangeText={props.onChangeText}
      onBlur={props.onBlur}
      style={styles.textInput}
      keyboardType={props.keyboardType}
      value={props.value}
    />
  );
};

export const PasswordInput = props => {
  return (
    <View style={styles.passwordContainer}>
      <TextInput
        name={props.name}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        placeholderTextColor={props.placeholderTextColor}
        onBlur={props.onBlur}
        value={props.value}
        keyboardType={props.keyboardType}
        secureTextEntry
        style={styles.passInput}
      />
      <Image source={props.source} />
    </View>
  );
};
export const CustomPassInput = props => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.customPasswordContainer}>
        <TextInput
          style={styles.customPassInput}
          value={props.value}
          onChangeText={props.onChangeText}
          name={props.name}
          onBlur={props.onBlur}
          keyboardType={props.keyboardType}
        />
        <Image source={props.source} />
      </View>
    </View>
  );
};

export const CustomInput = props => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
      <TextInput
        style={styles.customInput}
        multiline={props.multiline}
        value={props.value}
        onChangeText={props.onChangeText}
        name={props.name}
        onBlur={props.onBlur}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

export const CustomMultilineInput = ({
  text,
  multiline,
  value,
  onChangeText,
}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        style={styles.customMultilineInput}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
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

    fontSize: 18,
    margin: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 54,
    width: '85%',
    paddingHorizontal: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    margin: 15,
  },
  passInput: {
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
  customInput: {
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
  text: {
    marginHorizontal: 30,
    color: '#949CA5',
    fontSize: 18,
    marginTop: 10,
  },
  customPasswordContainer: {
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
  },
  customPassInput: {
    fontSize: 18,
    width: '90%',
  },
  customMultilineInput: {
    height: 95,
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
});
