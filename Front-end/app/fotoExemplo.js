import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Exemplo from "../assets/svg/exemploPratico";

export default function fotoExemplo() {
  const router = useRouter();

  const handleTirarFoto = () => {
    // Simula o login
    console.log("Redirecionando para tirar foto...");
    router.push("/camera");
  };

  return (
    <View style={styles.container}>
      <View>
        <Exemplo></Exemplo>
        <View style={styles.Containertext}>
          <Text style={styles.text}> Exemplo prático de como</Text>
        </View>
        <View style={styles.ContainertextT}>
          <Text style={styles.text}> tirar a foto</Text>
        </View>
        <View style={styles.Containerbutton}>
          <TouchableOpacity style={styles.button} onPress={handleTirarFoto}>
            <Ionicons
              name="arrow-forward-outline"
              size={35}
              color="#057B44"
              top="18"
              left="16"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E0E0E",
  },
  Containertext: {
    zIndex: 1,
    alignItems: "center",
    bottom: 730,
  },
  ContainertextT: {
    zIndex: 1,
    alignItems: "center",
    bottom: 690,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    position: "absolute",
    color: "#fff",
  },
  Containerbutton: {
    position: "absolute",
    zIndex: 1,
  },
  button: {
    width: 70,
    height: 70,
    left: 315,
    top: 700,
    backgroundColor: "#fff", // Fundo principal
    borderRadius: 15,
    borderCurve: "continuous",
  },
});
