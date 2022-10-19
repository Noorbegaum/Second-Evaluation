import React from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';

const RenderButton = props => {
  console.log(props.onPress);
  return (
    <Pressable onPress={props.onPress}>
      <Image
        source={require('../assets/images/search.png')}
        style={styles.contentIcon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentIcon: {
    marginLeft: 35,
  },
});

export default RenderButton;
