import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
} from 'react-native';
import {CustomDropInput, CustomPassInput} from '../components/InputField';
import {CustomInput} from '../components/InputField';
import {CustomMultilineInput} from '../components/InputField';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {add} from '../redux/ManagerSlice';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const AddSite = ({navigation}) => {
  const route = useRoute();
  const source = require('../assets/images/Bitmap.png');
  const dispatch = useDispatch();
  const siteDetails=route.params.item;

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          url: '',
          sitename: '',
          folder: '',
          username: '',
          password: '',
          notes: '',
          source: source,
        }}
        onSubmit={async values => {
          dispatch(add(values));
        }}>
        {({handleChange, handleBlur, values}) => (
          <>
            <View style={styles.topbar}>
              <View style={styles.leftIcon}>
              <Icon
                name="arrowleft"
                size={25}
                color="white"
                style={styles.icon}
                onPress={() => {
                  navigation.navigate('AppScreen');
                }}
              />
              <Text style={styles.text2}> Site Details</Text>
              </View>
              <Pressable
                onPress={() => {
                  navigation.navigate('Edit Site', {siteDetails});
                }}>
                <Text style={styles.text3}>Edit</Text>
              </Pressable>
            </View>

            <ScrollView nestedScrollEnabled={true}>
              <CustomInput
                text="URL"
                multiline={false}
                name="url"
                onChangeText={handleChange('url')}
                onBlur={handleBlur('url')}
                value={route.params.item.url}
              />
              <CustomInput
                text="Site Name"
                multiline={false}
                name="sitename"
                onChangeText={handleChange('sitename')}
                onBlur={handleBlur('sitename')}
                value={route.params.item.sitename}
              />
              <CustomDropInput
                text="Select/Folder"
                source={require('../assets/images/PathCopy.png')}
                name="folder"
                onChangeText={handleChange('folder')}
                onBlur={handleBlur('folder')}
                value={route.params.item.folder}
              />
              <CustomInput
                text="User Name"
                multiline={false}
                name="username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={route.params.item.username}
              />
              <CustomPassInput
                text="Site Password"
                source={require('../assets/images/eye_on.png')}
                name="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={route.params.item.password}
              />
              <CustomMultilineInput
                text="Notes"
                multiline={true}
                value={route.params.item.notes}
              />
            </ScrollView>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  leftIcon:{
    flexDirection: 'row',
  },
  text2: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 30,
    color: '#FFFFFF',
    alignSelf:'flex-start',
  },
  text3: {
    height: 28,
    width: 103,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 170,
    color: '#FFFFFF',
  },
  topbar: {
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    height: 60,
    justifyContent:'space-between'
  },
  icon: {
    marginTop: 20,
    marginLeft: 5,
  },
});

export default AddSite;
