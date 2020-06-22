import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import CompanyItem from '../../components/CompanyItem';

import { allCompanies } from '../../controllers/CompanyController';

import styles from './styles';

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {   
    getAllCompanies();
  },[]);

  async function getAllCompanies() {
    setCompanies(await allCompanies());
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={companies}
        keyExtractor={company => String(company.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: company }) => (
          <CompanyItem company={company} />
        )} />
    </View>
  );
}
