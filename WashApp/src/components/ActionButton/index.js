import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles';

export default function ActionButton({ handleButton }) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={handleButton}>
      <Icon name="forward" size={40} color={'#FFF'} />
    </TouchableOpacity>
  );
}
