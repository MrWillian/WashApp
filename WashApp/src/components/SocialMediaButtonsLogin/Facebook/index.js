import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import styles from '../btnStyles';

export default function FacebookButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.icon} source={require('../../../assets/images/facebook-icon.png')} />
      <Text style={styles.label}>Facebook</Text>
    </TouchableOpacity>
  );
}
