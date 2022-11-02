import React             from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';

const DropdownField = (props) => {

  return (
    <View  style={styles.textInputContainer}>
      <Text style={styles.text}>Select/Folder</Text>
      <SelectList
        text={props.text}
        name={props.name}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}
        data={props.data}
        setSelected={props.setSelected}

        placeholder={props.placeholder}
        boxStyles={{
          height: 55,
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: 20,
          alignSelf: 'center',
          backgroundColor: 'ç',
          borderWidth: 0.5,
          borderColor: '#D7D7D7',
          borderRadius: 5,
          fontSize: 18,
          margin: 15,
        }}
        inputStyles={{fontSize: 18,color:"black"}}
        dropdownStyles={{
          width: '100%',
          alignSelf: 'center',
          backgroundColor: '#F5F7FB',
          borderWidth: 0.5,
          borderColor: '#D7D7D7',
          borderRadius: 5,
        }}
        dropdownItemStyles={{marginHorizontal: 10}}
        dropdownTextStyles={{color: 'black'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#949CA5',
    fontSize: 18,
    marginTop: 10,
  },
  textInputContainer:{
    width: '85%',
    alignSelf: 'center',
  }
});

export default DropdownField;
