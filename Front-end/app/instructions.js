import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import Box from "../assets/svg/box.svg";
import IcontInstructions from "../assets/svg/icon-instructions";
import React from "react";

export default function instructions() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="#fff" />
      </TouchableOpacity>
      <View style={styles.contInstructions}>
        <IcontInstructions></IcontInstructions>
        <Text style={styles.text}>INSTRUÇÕES</Text>
      </View>
      <View style={styles.contObjects}>
        <Box></Box>
        <Text style={styles.text}>Evite fotografar objetos irrelevantes</Text>
      </View>
      <View style={styles.contFlash}>
        <Ionicons name="flash" size={60} color="#fff" />
        <Text style={styles.text}>Flash é recomendado</Text>
      </View>
      <View style={styles.contCamera}>
        <Ionicons name="camera" size={60} color="#fff" />
        <Text style={styles.text}>
          Mantenha o celular parado durante a foto e evite movimentos
        </Text>
      </View>
      <View style={styles.containerTextAux}>
        <Text style={styles.textAux}>
          Na próxima etapa, será disponibilizada uma imagem prática, para
          auxiliar no posicionamento da câmera e na distância da foto.
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.nextButton}>
          <Ionicons
            name="arrow-forward-outline"
            size={35}
            color="#057B44"
            left="3"
            bottom="2"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#057B44",
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 10,
  },
  contInstructions: {
    gap: 15,
  },
  contObjects: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    gap: 15,
  },
  contFlash: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    gap: 15,
    paddingRight: 150,
  },
  contCamera: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    gap: 15,
    paddingLeft: 35,
    paddingRight: 25,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "400",
    flexWrap: "wrap",
    maxWidth: "90%",
  },
  containerTextAux: {
    justifyContent: "center",
    textAlign: "center",
  },
  textAux: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "300",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 10,
    maxWidth: "95%",
  },
  nextButton: {
    position: "absolute",
    width: 70,
    height: 70,
    top: 50,
    left: 90,
    padding: 15,
    justifyContent: "flex-end",
    backgroundColor: "#fff", // Fundo principal
    borderRadius: 15,
    borderCurve: "continuous",
  },
});
