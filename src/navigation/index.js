import React from 'react';
import {Home, Profile, CarDetail} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="car-detail" component={CarDetail} />
    </Stack.Navigator>
  );
}
