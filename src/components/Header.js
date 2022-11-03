import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';
import { changeUserState } from '../redux/UserStateSlice';

const Header = ({onPress}) => {
  const [modalVisible, setModalVisible] = useState(false);

const handleLogout = ()=>{
  dispatch(changeUserState())
}

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };
const dispatch = useDispatch()
  return (
    <>
      <View style={styles.header}>
        <View style={styles.headerMenu}>
          <Image source={require('../assets/images/burger_menu.png')} />
          <Image
            source={require('../assets/images/PASSMANAGER.png')}
            style={styles.content}
          />
        </View>
        <View style={styles.headerIcons}>
          <View>
            <TouchableOpacity onPress={onPress}>
              <Image
                source={require('../assets/images/search.png')}
                style={styles.contentIcon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleModal}>
            <Image
              source={require('../assets/images/sync_icn.png')}
              style={styles.contentIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.contentIcon}
          />
          </TouchableOpacity>
        </View>
      </View>

      <Modal isVisible={modalVisible} coverScreen={true}>
        <TouchableOpacity onPress={handleModal} style={styles.syncView}>
            <Text style={styles.syncText}>{`Data sync in progress `}</Text>
            <Text style={styles.syncText}>{` please wait`}</Text>
            <Image style={styles.image} source={require('../assets/images/sync.png')} /> 
            </TouchableOpacity> 
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  syncView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'white'
  },
  syncText: {
    color: 'white',
    fontSize: 30,
  },
  image: {
    marginTop: 20,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#0E85FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.9,
    padding: 10,
  },
  headerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    marginLeft: 25,
  },
  contentIcon: {
    marginLeft: 35,
  },
  headerIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Header;
