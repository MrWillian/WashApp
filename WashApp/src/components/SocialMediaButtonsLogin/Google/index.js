import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import styles from '../btnStyles';

export default function GoogleButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.icon} source={require('../../../assets/images/google-icon.png')} />
      <Text style={styles.label}>Google</Text>
    </TouchableOpacity>
  );
}
