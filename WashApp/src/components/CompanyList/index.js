import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import CompanyItem from '../../components/CompanyItem';

import styles from './styles';

export default function CompanyList() {
  const [companies, setCompanies] = useState('');
  const listCompany = [
    {
      "id": 1,
      "name": "Lava-jato 1",
      "value": 25,
      "cnpj": "42.621.645/0001-91",
      "tellphone": null,
      "user_id": 10,
    },
    {
      "id": 2,
      "name": "Lava-jato 2",
      "value": 27,
      "cnpj": "42.621.645/0001-91",
      "tellphone": null,
      "user_id": 10,
    },
    {
      "id": 3,
      "name": "Lava-jato 3",
      "value": 23,
      "cnpj": "42.621.645/0001-91",
      "tellphone": null,
      "user_id": 10,
    },
    {
      "id": 4,
      "name": "Lava-jato 4",
      "value": 22,
      "cnpj": "42.621.645/0001-91",
      "tellphone": null,
      "user_id": 10,
    },
    {
      "id": 5,
      "name": "Lava-jato 5",
      "value": 22,
      "cnpj": "42.621.645/0001-91",
      "tellphone": null,
      "user_id": 10,
    },
    {
      "id": 6,
      "name": "Lava-jato 6",
      "value": 22,
      "cnpj": "42.621.645/0001-91",
      "tellphone": null,
      "user_id": 10,
    },
  ];

  useEffect(() => {
    setCompanies(listCompany);
  },[]);

  return (
    <View style={styles.container}>
      <FlatList
        data={companies}
        keyExtractor={company => String(company.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: company }) => (
          <CompanyItem company={company} />
        )}
         />
    </View>
  );
}
