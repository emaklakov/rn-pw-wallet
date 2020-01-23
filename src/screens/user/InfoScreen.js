import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const InfoScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>InfoScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
