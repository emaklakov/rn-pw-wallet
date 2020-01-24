import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LogOutButton } from '../../components/LogOutButton';

export const HistoryScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>HistoryScreen</Text>
    </View>
  );
};

HistoryScreen.navigationOptions = {
  headerTitle: 'History',
  headerRight: () => <LogOutButton />
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
