import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

export default function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="forward" size={40} color={'#FFF'} />
    </TouchableOpacity>
  );
}
