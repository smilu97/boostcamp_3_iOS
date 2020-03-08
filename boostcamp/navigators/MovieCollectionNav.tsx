import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderSettingIcon from '../components/OrderSettingIcon';
import MovieCollection from '../screens/MovieCollection';
import { useSelector } from 'react-redux';
import MovieDetail from '../screens/MovieDetail';

const Stack = createStackNavigator();

function getTitle(route, orderType) {
  let title = route.name;
  const orderName = ['예매율', '큐레이션', '개봉일'][orderType];
  console.log('route:', route);
  if (route.name === 'MovieCollection') {
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
  if (route.name === 'MovieCollection') {
    return () => <OrderSettingIcon />;
  }
  return undefined;
}

function MovieCollectionNav() {
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
      <Stack.Screen name="MovieCollection" component={MovieCollection} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
}

export default MovieCollectionNav;
