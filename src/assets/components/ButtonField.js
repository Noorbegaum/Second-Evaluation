
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonField = ({text,onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
     </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 4,
        backgroundColor: 'white',
        marginStart:35,
        marginTop:5,
        width:130,
        height:44,
      },
      buttonText:{
        color:'rgb(51, 133, 255)',
        fontWeight:'bold',
        fontSize:20,
      }
});

export default ButtonField;

