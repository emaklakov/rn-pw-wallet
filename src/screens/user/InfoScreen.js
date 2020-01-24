import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LogOutButton } from '../../components/LogOutButton';

export const InfoScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>InfoScreen</Text>
    </View>
  );
};

InfoScreen.navigationOptions = ({}) => {
  return {
    headerTitle: 'Info',
    headerRight: () => <LogOutButton />
  };
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
