/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';


import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './screens/FirstScreen';
import TravelRegisterScreen from './screens/TravelRegisterScreen';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="First"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="First" component={FirstScreen} />
          <Stack.Screen
            name="TravelRegister"
            component={TravelRegisterScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
