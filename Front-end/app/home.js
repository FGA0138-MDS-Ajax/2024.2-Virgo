import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-Vindo ao Cuidar Verde!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o componente ocupar toda a tela
    backgroundColor: "#E8F5E9", // Cor verde clara suave
    justifyContent: "center", // Centraliza no eixo vertical
    alignItems: "center", // Centraliza no eixo horizontal
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32", // Um tom de verde escuro
  },
});
