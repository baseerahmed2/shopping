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

const store = configStore()

const App: () => Node = () => {
  
  return (
<Provider store={store}>
<AppNavigatior/>

</Provider>

  );
};


export default App;
