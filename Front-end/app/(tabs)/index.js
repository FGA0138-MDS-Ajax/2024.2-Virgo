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
    paddingTop: 200,
  },
  paternContainer: {
    marginLeft: 25,
    marginBottom: 53,
  },
  patern: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#057B44", // Fundo principal
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
    marginBottom: 10,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 1,
  },
  disp: {
    justifyContent: "flex-end",
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
