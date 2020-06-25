import React from 'react';
import { View } from 'react-native';

import FacebookButton from './Facebook';
import GoogleButton from './Google';

import styles from './styles';

export default function SocialMediaButtonsLogin() { 
  return (
    <View style={styles.container}>
      <FacebookButton />
      <GoogleButton />
    </View>
  );
};
