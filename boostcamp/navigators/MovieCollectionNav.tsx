import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderSettingIcon from '../components/OrderSettingIcon';
import MovieCollection from '../screens/MovieCollection';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const screenOptions = {
  headerRight: () => <OrderSettingIcon />,
};

function MovieCollectionNav() {
  const orderType = useSelector(state => state.global.orderType);
  const orderName = ['예매율', '큐레이션', '개봉일'][orderType];
  return (
    <Stack.Navigator
      screenOptions={{
        ...screenOptions,
        title: `${orderName}순`,
      }}
    >
      <Stack.Screen name="MovieCollection" component={MovieCollection} />
    </Stack.Navigator>
  );
}

export default MovieCollectionNav;
