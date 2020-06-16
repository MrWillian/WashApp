import React from 'react';
import { SafeAreaView } from 'react-native';
import BottomScreen from '../../components/BottomScreen';
import Button from '../../components/Button';

import styles from './styles';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <BottomScreen />
      <Button />
    </SafeAreaView>
  );
}
