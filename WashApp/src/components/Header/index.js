import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Header({ activeScreen }) {
  const navigation = useNavigation();

  function toLogin() { navigation.navigate('Login'); }
  function toRegister() { navigation.navigate('Register'); }

  return (
    <View style={styles.container}>
      <View style={styles.logoHeader}></View>
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={styles.btnContainer}
          onPress={toLogin}>
          <Text style={activeScreen == 'Login' ? styles.btnLabelActive : styles.btnLabel}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnContainer}
          onPress={toRegister}>
          <Text style={activeScreen == 'Register' ? styles.btnLabelActive : styles.btnLabel}>
            REGISTRAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
