import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import CompanyList from '../../components/CompanyList';
import BottomScreen from '../../components/BottomScreen';
import FabButton from '../../components/FabButton';

import { useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Home() {
  const [user, setUser] = useState({});
  const route = useRoute();

  useEffect(() => {
    setUser(route.params.data);
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.contentContainer}>
      <Text style={styles.title}>Olá, {user.name}</Text>
        
        <CompanyList />

      </View>

      <BottomScreen />
      {/* <FabButton /> */}
    </View>
  );
}
