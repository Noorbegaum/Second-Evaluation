import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const SearchField = ({onChangeText,placeholder,placeholderTextColor,onPress}) => {
  return (
    <View style={styles.SectionStyle}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.text}
        placeholderTextColor="grey"
      />
      <Icon name="arrow-right" size={25} color="#0E85FF" onPress={onPress}/>
    </View>
  );
};
export default SearchField;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 55,
    color:"black",
    borderRadius: 4,
    justifyContent: 'space-between',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  text:{
    color:"black",
    fontSize: 18,
  }
});
