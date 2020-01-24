import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SignUpScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

SignUpScreen.navigationOptions = {
  headerTitle: 'Sign Up'
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
