import React from 'react';
import {View, FlatList, StyleSheet, Text, Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';

const SiteList = ({navigation}) => {
  const value = useSelector(state => state.sitedata.value);

  return (
    <View style={styles.container}>
      <FlatList
        data={value}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Site Details', {item});
            }}>
            <View style={styles.itemContainer}>
              <View>
                <View style={styles.topItem}>
                  <Image source={item.source}></Image>
                  <View>
                    <Text style={styles.socialText}>{item.sitename}</Text>
                    <View>
                      <Text style={styles.copyText}>Copy Password</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.bottomItem}>
                  <Text style={styles.link}>{item.url}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
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
