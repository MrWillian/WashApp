import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function CompanyItem({ company }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer} />
      <View style={styles.infoCompanyContainer}>
        <Text style={styles.infoCompanyNameLabel}>{company.name}</Text>
        <Text style={styles.infoCompanyValueLabel}>R$ {company.value},00</Text>
      </View>
      <View style={styles.btnActionContainer}>
        <TouchableOpacity style={styles.btnActionService}>
          <Icon name="forward" size={20} color={'#FFF'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnActionChat}>
          <Icon name="chat" size={20} color={'#FFF'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
