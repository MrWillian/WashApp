import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import BottomScreen from '../../components/BottomScreen';
import ActionButton from '../../components/ActionButton';

import { registerUserClient } from '../../controllers/RegisterController';

import styles from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  
  const navigation = useNavigation();

  async function handleRegister() {
    const response = await registerUserClient(name, email, password, cellPhone);
    if (!response) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar se registrar, tente novamente!', [
        { test: "Cancelar", style: "cancel" }
      ]);
      return;
    }
    
    navigation.navigate('Home', response);
  }

  function toRegisterCompany() { navigation.navigate('RegisterCompany'); }

  return (
    <SafeAreaView style={styles.container}>

      <Header activeScreen="Register" />

      <View style={styles.form}>
        <Text style={styles.title}>Olá, entre com os seus dados...</Text>

        <Text style={styles.label}>Nome</Text>
        <TextInput 
          style={styles.textInput} 
          value={name} 
          autoFocus={true}
          placeholder="Digite seu nome..."
          onChangeText={name => setName(name)} />

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

        <Text style={styles.label}>Confirmar senha</Text>
        <TextInput 
          style={styles.textInput} 
          value={confirmPassword}
          placeholder="Confirme sua senha..."
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
          secureTextEntry={true} />

        <Text style={styles.label}>Celular</Text>
        <TextInput 
          style={styles.textInput} 
          value={cellPhone}
          placeholder="Digite seu celular..."
          onChangeText={cellPhone => setCellPhone(cellPhone)} />
        
        <TouchableOpacity onPress={toRegisterCompany}>
          <Text style={styles.registerCompany}>
            Cadastrar como prestador de serviços...
          </Text>
        </TouchableOpacity>
        
      </View>

      <BottomScreen />
      <ActionButton handleButton={handleRegister} />
    </SafeAreaView>
  );
}
