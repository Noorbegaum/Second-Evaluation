import React from 'react';
import { View, Text} from 'react-native';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import AuthScreen from './src/screens/AuthScreen';
import Router from './src/navigation/Router';
const App = () => {
  return (
      <Router />
  );
};


export default App;
