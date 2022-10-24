import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const ButtonField = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const CustomButtonField = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <Text style={styles.customText}>{text}</Text>
    </TouchableOpacity>
  );
};

export const UpdateButtonField = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.updateButton} onPress={onPress}>
      <Text style={styles.customText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: 'white',
    marginTop: 5,
    width: 130,
    height: 44,
  },
  customButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E85FF',
    height: 44,
    width: '50%',
    margin: 0.5,
  },
  buttonText: {
    color: 'rgb(51, 133, 255)',
    fontWeight: 'bold',
    fontSize: 20,
  },
  customText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  updateButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E85FF',
    height: 44,
    width: '100%',
    margin: 0.5,
  },
});
