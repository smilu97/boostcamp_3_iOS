import 'react-native-gesture-handler';
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import RootNav from './navigators/RootNav';
import store from './store';

enableScreens();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </ReduxProvider>
  );
}
