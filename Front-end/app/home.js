import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import IconLogo from "../assets/svg/icon-logo.svg";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Logo Centralizado */}
        <IconLogo height="250" />
      </View>
      <View style={styles.slogan}>
        <Text style={styles.home}>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 250,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  slogan: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  home: {
    fontSize: 40,
  },
});
