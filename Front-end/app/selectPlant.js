import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import IcontPlant from "../assets/svg/icon-plant.svg";
import React from "react";

export function selectPlant() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleInstructions = (plant) => {
    console.log("Redirecionando para /instructions...");
    try {
      router.push({
        pathname: "/camera",
        params: { plant_type: plant },
      });
      console.log("Redirecionamento bem-sucedido!");
    } catch (error) {
      console.error("Erro ao redirecionar:", error);
    }
  };

  //Array de plantas para não precisar colocar caixa a caixa
  const plants = [
    "Goiaba",
    "Mandioca",
    "Banana",
    "Alho",
    "Morango",
    "Alface",
    "Tomate",
    "Milho",
    "Laranja",
    "Soja",
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="#164B2A" />
      </TouchableOpacity>
      <View style={styles.containerPlants}>
        {plants.map((plant, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleInstructions(plant)}
          >
            <View style={styles.buttonIcon}>
              <IcontPlant></IcontPlant>
            </View>
            <Text style={styles.buttonText}>{plant}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 10,
  },
  containerPlants: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    maxWidth: 400, // Controla o tamanho máximo da grade na VERTICAL
    gap: 15,
    top: 35,
  },
  button: {
    width: "45%",
    height: 130,
    justifyContent: "flex-end",
    backgroundColor: "#057B44", // Fundo principal
    borderRadius: 15,
    borderCurve: "continuous",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
});
export default selectPlant;
