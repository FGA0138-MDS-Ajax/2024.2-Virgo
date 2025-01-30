import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import React from "react";

export default function instructions() {
  const router = useRouter();

  const handleMenu = () => {
    router.push("/(tabs)");
  };
  const handleAvaliar = () => {
    router.push("/teste");
  };

  return (
    <View style={styles.container}>
      <View style={styles.ContainerImage}>
        <Ionicons name="cube-outline" size={100} color="#164B2A" />
      </View>
      <View style={styles.ContainerPraga}>
        <Text style={styles.nomePraga}>NOME DA DOENÇA</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity onPress={handleMenu} style={styles.buttonGreen}>
            <Text style={styles.buttonText}>Voltar ao menu inicial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingBottom: 20,
  },
  ContainerPraga: {
    justifyContent: "center",
    alignItems: "center",
  },
  ContainerImage: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 40,
  },
  nomePraga: {
    fontSize: 30,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    flex: 1,
    marginTop: 10,
    gap: "25",
    marginBottom: 40,
  },
  buttonGreen: {
    width: 330,
    height: 70,
    backgroundColor: "#057B44",
    justifyContent: "center",
    alignItems: "center",
    borderCurve: "continuous",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
