import React from 'react';
import { View, Text} from 'react-native';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import AuthScreen from './src/screens/AuthScreen';
import Router from './src/navigation/Router';
import { store } from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      </Provider>
  );
};


export default App;
