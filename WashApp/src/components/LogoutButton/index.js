import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function LogoutButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>X</Text>
    </TouchableOpacity>
  );
}
