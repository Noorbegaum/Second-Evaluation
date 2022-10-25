import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { filterSite } from '../redux/ManagerSlice';


const SubHeaderField = () => {
  const [item, setItem] = useState('All');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.sitedata.value);
  
  const sitesData = ['All','Social Media','Shopping Site'];

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handlePress = data => {
    setItem(data);
  
    setVisible(!visible);
    dispatch(filterSite(data))

  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.dropdownView}>
          {sitesData.map(data => (
            <TouchableOpacity onPress={() => handlePress(data)} key={data}>
              <Text style={styles.dropdownText}>{data}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
  };

  return (
    <View>
      <View style={styles.subHeader}>
        <View>
          <Text style={styles.sites}>Sites</Text>
          <View style={styles.borderBottom}></View>
        </View>
        <View style={styles.rightsubHeader}>
          <Text style={styles.socialMedia}>{item}</Text>
          <View style={styles.oval}>
            <Text style={styles.number}>0{data.length}</Text>
          </View>
          <TouchableOpacity
            onPress={toggleDropdown}
            style={{flexDirection: 'column'}}>
            <Image
              source={require('../assets/images/PathCopy.png')}
              style={styles.dropdown}
            />
          </TouchableOpacity>
        </View>
      </View>
      {renderDropdown()}
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: 'row',
    backgrounColor: '#FAFAFA',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 10,
  },
  borderBottom: {
    borderBottomWidth: 4,
    height: 3.2,
    width: 30,
    borderBottomColor: '#FFA136',
    borderRadius: 1.6,
    marginLeft: 10,
  },
  rightsubHeader: {
    flexDirection: 'row',
  },
  sites: {
    height: 33,
    width: 55,
    color: '#3C4857',
    fontSize: 24,
    lineHeight: 33,
    marginHorizontal: 10,
  },
  socialMedia: {
    color: '#3C4857',
    fontSize: 19.2,
    lineHeight: 27,
  },
  number: {
    height: 22,
    width: 19,
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
  },
  oval: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 29,
    width: 29,
    backgroundColor: '#0E85FF',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  dropdown: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 7.15,
    width: 11.2,
    margin: 10,
  },
  dropdownView: {
    borderWidth: 1,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'column',
    marginEnd: 20,
    marginBottom: 20,
    // borderRadius: 10,
    borderColor: '#D7D7D7',
    backgroundColor:'#F4F4F4',
    marginTop:-20,
  },
  dropdownText: {
    // borderRadius: 10,
    borderWidth: 0.2,
    borderColor: '#D7D7D7',
    padding: 5,
    color:'black',
    fontSize:18,
    borderBottomEndRadius:10
  },
});

export default SubHeaderField;
