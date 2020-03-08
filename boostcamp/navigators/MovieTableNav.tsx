import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieTable from '../screens/MovieTable/index';
import OrderSettingIcon from '../components/OrderSettingIcon';

const Stack = createStackNavigator();

const screenOptions = {
  headerRight: () => <OrderSettingIcon />,
};

function MovieTableNav() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="MovieCollection" component={MovieTable} />
    </Stack.Navigator>
  );
}

export default MovieTableNav;
