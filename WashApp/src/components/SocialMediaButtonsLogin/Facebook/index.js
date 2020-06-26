import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import { LoginManager } from "react-native-fbsdk";

import styles from '../btnStyles';

export default function FacebookButton() {

  async function loginWithFacebook() {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }


  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={loginWithFacebook}>
      <Image style={styles.icon} source={require('../../../assets/images/facebook-icon.png')} />
      <Text style={styles.label}>Facebook</Text>
    </TouchableOpacity>
  );
}
