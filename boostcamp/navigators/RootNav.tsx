import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo } from '@expo/vector-icons';

import MovieTableNav from './MovieTableNav';
import MovieCollectionNav from './MovieCollectionNav';

const RootTab = createBottomTabNavigator();

function RootNav() {
  return (
    <RootTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'MovieTableNav') {
            return <Ionicons name="ios-list" size={size} color={color} />;
          } else if (route.name === 'MovieCollectionNav') {
            return <Entypo name="grid" size={size} color={color} />;
          }
          return null;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <RootTab.Screen name="MovieTableNav" component={MovieTableNav} />
      <RootTab.Screen
        name="MovieCollectionNav"
        component={MovieCollectionNav}
      />
    </RootTab.Navigator>
  );
}

export default RootNav;
