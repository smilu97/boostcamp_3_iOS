import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieTable from '../screens/MovieTable/index';
import OrderSettingIcon from '../components/OrderSettingIcon';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const screenOptions = {
  headerRight: () => <OrderSettingIcon />,
};

function MovieTableNav() {
  const orderType = useSelector(state => state.global.orderType);
  const orderName = ['예매율', '큐레이션', '개봉일'][orderType];
  return (
    <Stack.Navigator
      screenOptions={{
        ...screenOptions,
        title: `${orderName}순`,
      }}
    >
      <Stack.Screen name="MovieCollection" component={MovieTable} />
    </Stack.Navigator>
  );
}

export default MovieTableNav;
