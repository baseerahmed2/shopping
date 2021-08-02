/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigatior from './src/navigation/AppNavigation';
import { Provider  } from 'react-redux';
import {configStore} from './src/store/configStore';
import { LogBox } from 'react-native';

  LogBox.ignoreLogs(['Warning: ...']); //Hide warnings
  
// Ignore all log notifications:
LogBox.ignoreAllLogs();
const store = configStore()

const App: () => Node = () => {
  
  return (
<Provider store={store}>
<AppNavigatior/>

</Provider>

  );
};


console.log('state--->', store.getState())
export default App;
