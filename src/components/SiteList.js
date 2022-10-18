import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import EditSite from '../screens/EditSite';
const DATA = [
  {
    key: 'Facebook',
    source: require('../assets/images/Bitmap.png'),
    link: 'www.facebook.com',
  },
  {
    key: 'YouTube',
    source: require('../assets/images/YouTube.png'),
    link: 'www.youtube.com/ssmraok',
  },
  {
    key: 'Twitter',
    source: require('../assets/images/Twitter.png'),
    link: 'www.twitter.com',
  },
  {
    key: 'Instagram',
    source: require('../assets/images/Insta.png'),
    link: 'www.instagram.com',
  },

];

const SiteList = ({navigation}) => {

  const handlePress =()=>{
    navigation.navigate("Site Details")
  }

  return (
    <View style={styles.container}>
      <FlatList
      
        data={DATA}
        renderItem={({item}) => (
          <Pressable onPress={handlePress}>
          <View style={styles.itemContainer} >
            <View>
              <View style={styles.topItem}>
                <Image source={item.source}></Image>
                <View>
                  <Text style={styles.socialText}>{item.key}</Text>
                  <View>
                    <Text style={styles.copyText}>Copy Password</Text>
                  </View>
                </View>
              </View>

              <View style={styles.bottomItem}>
                <Text style={styles.link}>{item.link}</Text>
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
    marginBottom:12,
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
    backgroundColor:'#FAFAFA',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
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
