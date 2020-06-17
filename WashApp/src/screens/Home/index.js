import React from 'react';
import { View, Text } from 'react-native';

import CompanyList from '../../components/CompanyList';
import BottomScreen from '../../components/BottomScreen';
import FabButton from '../../components/FabButton';

import styles from './styles';

export default function Home() {

  return (
    <View style={styles.container}>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Olá...</Text>
        
        <CompanyList />

      </View>

      <BottomScreen />
      <FabButton />
    </View>
  );
}
