import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text } from 'react-native';
import BottomScreen from '../../components/BottomScreen';
import Button from '../../components/Button';

import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.form}>
        <Text style={styles.title}>Faça login...</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.textInput} 
          value={email} 
          placeholder="Digite seu email..."
          onChangeText={email => setEmail(email)} />
        
        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.textInput} 
          value={password}
          placeholder="Digite sua senha..."
          onChangeText={password => setPassword(password)}
          secureTextEntry={true} />

      </View>

      <BottomScreen />
      <Button />
    </SafeAreaView>
  );
}
