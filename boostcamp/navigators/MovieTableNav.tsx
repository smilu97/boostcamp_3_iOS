import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieTable from '../screens/MovieTable/index';
import OrderSettingIcon from '../components/OrderSettingIcon';
import { useSelector } from 'react-redux';
import MovieDetail from '../screens/MovieDetail/index';

const Stack = createStackNavigator();

function getTitle(route, orderType) {
  let title = route.name;
  const orderName = ['예매율', '큐레이션', '개봉일'][orderType];
  if (route.name === 'MovieTable') {
    return `${orderName}순`;
  } else if (route.name === 'MovieDetail') {
    const params: any = route.params;
    if (params.movie) {
      title = params.movie.title;
    }
  }
  return route.name;
}

function getHeaderRight(route) {
  if (route.name === 'MovieTable') {
    return () => <OrderSettingIcon />;
  }
  return undefined;
}

function MovieTableNav() {
  const orderType = useSelector(state => state.global.orderType);
  return (
    <Stack.Navigator
      screenOptions={({ route }) => {
        return {
          title: getTitle(route, orderType),
          headerRight: getHeaderRight(route),
        };
      }}
    >
      <Stack.Screen name="MovieTable" component={MovieTable} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
}

export default MovieTableNav;
