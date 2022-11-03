import React, { useEffect } from 'react';
import {View, FlatList, StyleSheet, Text, Image, Pressable, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteSite} from '../redux/ManagerSlice';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/Feather';
import Clipboard from '@react-native-clipboard/clipboard';
import { getUserData } from '../redux/ManagerSlice';

const SiteList = ({navigation}) => {

  const userId = useSelector(state => state.userId.userId);
  const value = useSelector(state => state.sitedata.value);

  const copyToClipboard = (password) => {
    Clipboard.setString(password);
    Toast.show(`Copied`);
  };
  useEffect(() => {
    dispatch(getUserData(userId));
  }, []);
    const dispatch = useDispatch();
  return (

    
    <View style={styles.container}>
      <FlatList
        data={value}
        renderItem={({item}) => (
          (
            <Pressable
              onPress={() => {
                navigation.navigate('Site Details', {item});
              }}
              onLongPress={() => {
                dispatch(deleteSite({id: item.id}));
                Toast.show(`Deleted ${item.sitename} Successfully`);
              }}>
              <View style={styles.itemContainer}>
                <View>
                  <View style={styles.topItem}>
                    <Image source={item.source}></Image>
                    <View>
                      <Text style={styles.socialText}>{item.sitename}</Text>
                      <TouchableOpacity onPress={()=>copyToClipboard(item.password)}>
                        <Text style={styles.copyText}>
                          <Icon name="copy" size={15}/>
                          {` Copy Password`}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.bottomItem}>
                    <Text style={styles.link}>{item.url}</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          )
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default SiteList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemContainer: {
    height: 103.5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 10,
    shadowOffset: {width: -2, height: 1},
    shadowColor: '#3C4857',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 12,
  },
  topItem: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 65.7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomItem: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FAFAFA',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  socialText: {
    color: '#0E85FF',
    fontSize: 18,
    fontWeight: 60,
    lineHeight: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingVertical: 6,
  },
  copyText: {
    color: '#0E85FF',
    fontSize: 11.34,
    alignSelf: 'flex-end',
    paddingVertical: 6,
  },
  link: {
    color: '#3C4857',
    fontSize: 14.4,
  },
});
