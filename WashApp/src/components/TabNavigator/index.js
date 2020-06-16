import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Login from '../../screens/Login';
import Register from '../../screens/Register';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 18 },
        tabStyle: { width: '100%' },
        style: { backgroundColor: 'powderblue' },
      }}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}