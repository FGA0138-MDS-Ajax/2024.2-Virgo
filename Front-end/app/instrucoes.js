import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Onboarding from "../components/Onboarding";

export default instrucoes = () => {
  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar styles="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
});
