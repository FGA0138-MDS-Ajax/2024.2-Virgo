import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { Image } from "react-native";
import React from "react";

// Importar as imagens das plantas
import GoiabaIcon from "../assets/images/pe-de-goiaba.jpg";
import MandiocaIcon from "../assets/images/pe-de-mandioca.jpg";
import BananaIcon from "../assets/images/banana.jpg";
import AlhoIcon from "../assets/images/alho.jpg";
import MorangoIcon from "../assets/images/morango.jpg";
import AlfaceIcon from "../assets/images/alface.jpg";
import TomateIcon from "../assets/images/tomate.jpg";
import MilhoIcon from "../assets/images/milho.jpg";
import LaranjaIcon from "../assets/images/laranja.jpg";
import SojaIcon from "../assets/images/soja.jpg";

export function SelectPlant() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleInstructions = (plant) => {
    console.log("Redirecionando para /instructions...");
    try {
      router.push({
        pathname: "/instrucoes",
        params: { plant_type: plant },
      });
      console.log("Redirecionamento bem-sucedido!");
    } catch (error) {
      console.error("Erro ao redirecionar:", error);
    }
  };

  // Array de plantas para não precisar colocar caixa a caixa
  const plants = [
    { name: "Goiaba", icon: GoiabaIcon },
    { name: "Mandioca", icon: MandiocaIcon },
    { name: "Banana", icon: BananaIcon },
    { name: "Alho", icon: AlhoIcon },
    { name: "Morango", icon: MorangoIcon },
    { name: "Alface", icon: AlfaceIcon },
    { name: "Tomate", icon: TomateIcon },
    { name: "Milho", icon: MilhoIcon },
    { name: "Laranja", icon: LaranjaIcon },
    { name: "Soja", icon: SojaIcon },
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
            onPress={() => handleInstructions(plant.name)}
          >
            <Image
              style={styles.image}
              source={plant.icon}
              resizeMode="cover"
            />
            <Text style={styles.buttonText}>{plant.name}</Text>
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
    marginBottom: 20,
  },
  containerPlants: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 100,
    maxWidth: 380, // Controla o tamanho máximo da grade na VERTICAL
    gap: 15,
  },
  button: {
    width: "45%",
    height: 120,
    justifyContent: "flex-end",
    backgroundColor: "#057c44",
    borderRadius: 15,
    borderCurve: "continuous",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    overflow: "hidden",
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
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 5,
  },
});

export default SelectPlant;
