import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";

export default function instructions() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleMenu = () => {
    router.push("/(tabs)");
  };
  const handleAvaliar = () => {
    smileface;
    router.push("/teste");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="#164B2A" />
      </TouchableOpacity>
      <View style={styles.containerImage}>
        <Ionicons name="cube-outline" size={100} color="#164B2A" />
      </View>
      <View style={styles.containerPraga}>
        <Text style={styles.nomePraga}>NOME DA DOENÇA</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.ContainerAvaliação}>
          <TouchableOpacity style={styles.labelAvalia}>
            <FontAwesome6 name="smile" size={90} color="#194A2C" />
            <Text style={styles.RuimBom}> Bom </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.labelAvalia}>
            <FontAwesome6 name="face-frown" size={90} color="#AE0000" />
            <Text style={styles.RuimBom}> Ruim </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handleMenu} style={styles.buttonGreen}>
            <Text style={styles.buttonText}>Enviar</Text>
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
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 10,
  },
  containerPraga: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 40,
  },
  nomePraga: {
    fontSize: 30,
  },
  ContainerAvaliação: {
    flexDirection: "row",
    gap: 80,
    justifyContent: "flex-end",
    marginBottom: 100,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginTop: 10,
    gap: "25",
    marginBottom: 40,
  },
  labelAvalia: {
    alignItems: "center",
  },
  RuimBom: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: "5",
  },
  buttonGreen: {
    width: 350,
    height: 60,
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
