import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

export default function FabButton() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Icon name="plus" size={24} color="#FFF" />
      </View>
    </View>
  );
}
