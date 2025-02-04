import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import * as Svg from "react-native-svg";
import IconSelectPlant from "../../assets/svg/icon-button-selectPlant.svg";
import Patern from "../../assets/svg/PATERN.svg";

const Home = () => {
  const router = useRouter();

  const handleSelectPlant = () => {
    console.log("Tentando redirecionar para /selectPlant...");
    try {
      router.push("/selectPlant");
      console.log("Redirecionamento bem-sucedido!");
    } catch (error) {
      console.error("Erro ao redirecionar:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.paternContainer}>
        <Patern style={styles.patern}></Patern>
      </View>
      <View style={styles.home}>
        <TouchableOpacity style={styles.button} onPress={handleSelectPlant}>
          <IconSelectPlant style={styles.icon}></IconSelectPlant>
          <View style={styles.disp}>
            <Text style={styles.buttonText}>Selecione uma</Text>
            <Text style={styles.buttonTextP}>planta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  paternContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  patern: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  home: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 250,
    height: 250,
    backgroundColor: "#057B44",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    borderCurve: "continuous",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 1,
  },
  disp: {
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center", // Centraliza horizontalmente
    flex: 1,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF", // Cor do texto
    fontSize: 22, // Tamanho ajustado
    fontWeight: "bold",
  },
  buttonTextP: {
    color: "#FFFFFF", // Cor do texto
    fontSize: 22, // Tamanho ajustado
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
