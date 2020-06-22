import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { removeItem } from '../../controllers/StorageController';

export default function LogoutButton() {
  
  const navigation = useNavigation();

  async function logout() {
    await removeItem('userSession');
    navigation.navigate('Login'); 
  }

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={logout}>
      <Text style={styles.label}>X</Text>
    </TouchableOpacity>
  );
}
