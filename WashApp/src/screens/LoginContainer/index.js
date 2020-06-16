import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Login from '../../screens/Login';
import Register from '../../screens/Register';

const Tab = createMaterialTopTabNavigator();

export default function LoginContainer() {
  return (
    <View>
      <Tab.Navigator
        initialRouteName="Login"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: 'powderblue' },
        }}>
        
        <Tab.Screen name="Login" component={Login} options={{ tabBarLabel: 'Login' }} />
        <Tab.Screen name="Register" component={Register} options={{ tabBarLabel: 'Registrar' }} />
      
      </Tab.Navigator>

      <Text>Teste</Text>
    </View>
  );
}
