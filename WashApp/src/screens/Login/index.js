import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import BottomScreen from '../../components/BottomScreen';
import ActionButton from '../../components/ActionButton';

import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  async function handleLogin() { navigation.navigate('Home'); }

  return (
    <SafeAreaView style={styles.container}>
      
      <Header activeScreen="Login" />

      <View style={styles.form}>
        <Text style={styles.title}>Faça login...</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.textInput} 
          value={email} 
          autoFocus={true}
          placeholder="Digite seu email..."
          onChangeText={email => setEmail(email)} />
        
        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.textInput} 
          value={password}
          placeholder="Digite sua senha..."
          onChangeText={password => setPassword(password)}
          secureTextEntry={true} />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>
      </View>

      <BottomScreen />
      <ActionButton handleButton={handleLogin} />
    </SafeAreaView>
  );
}
