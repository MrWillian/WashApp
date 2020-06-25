import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import BottomScreen from '../../components/BottomScreen';
import ActionButton from '../../components/ActionButton';
import SocialMediaButtonsLogin from '../../components/SocialMediaButtonsLogin';
import Divisor from '../../components/Divisor';

import { login } from '../../controllers/LoginController';
import { save, load } from '../../controllers/StorageController';

import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    async function loadUser() {
      await load('userSession')
<<<<<<< HEAD
        .then(user => { 
          navigation.navigate('Home', user); 
=======
        .then(user => {
          if (!user)
            return;
          navigation.navigate('Home', user);
>>>>>>> 743fa31222ba21d4439c8d758726a9e09136a9cd
        })
        .catch(err => { console.log(err.message); })
    }

    loadUser();
  }, []);

  async function handleLogin() { 
    const user = await login(email, password);

    if (!user) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar se autenticar, tente novamente!', [
        { test: "Cancelar", style: "cancel" }
      ]);
      return;
    }

    await save('userSession', user);
    
    navigation.navigate('Home', user); 
  }

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

        <Divisor />
        
        <SocialMediaButtonsLogin />

      </View>
      

      <BottomScreen />
      <ActionButton handleButton={handleLogin} />
    </SafeAreaView>
  );
}
