import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Text, View, Image } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const [imageUri, setImageUri] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const uri = await AsyncStorage.getItem("PlantImage");
        console.log("Imagem recuperada do AsyncStorage:", uri); // Verifica se a imagem foi armazenada
        if (uri) {
          setImageUri(uri);
        }
      } catch (error) {
        console.error("Erro ao recuperar a imagem:", error);
      }
    };

    getImage();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="#0D2717" />
      </TouchableOpacity>
      <View style={styles.textImportante}>
        <Text style={styles.textAux}>
          Sua avaliação é importante para o desenvolvimento da nossa I.A
        </Text>
      </View>
      <View style={styles.ContainerImage}>
        {imageUri ? (
          <Image
            source={{ uri: imageUri }}
            style={{
              width: 500,
              height: 300,
              resizeMode: "center",
            }}
          />
        ) : (
          <Text style={styles.noImageText}>Nenhuma imagem disponível</Text>
        )}
      </View>
      <View style={styles.containerPraga}>
        <Text style={styles.nomePraga}>NOME DA DOENÇA</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.ContainerAvaliação}>
          <TouchableOpacity style={styles.labelAvalia}>
            <FontAwesome6 name="smile" size={80} color="#194A2C" />
            <Text style={styles.RuimBom}> Bom </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.labelAvalia}>
            <FontAwesome6 name="face-frown" size={80} color="#AE0000" />
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
    top: 60,
    left: 20,
    zIndex: 10,
  },
  textImportante: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 100,
  },
  textAux: {
    fontSize: 16,
    fontWeight: "500",
    fontSize: 17,
    color: "#656565",
    textAlign: "center",
    paddingHorizontal: 100,
  },
  containerPraga: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 530,
  },
  ContainerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 170,
    width: "100%",
    backgroundColor: "#057B44",
  },
  nomePraga: {
    fontSize: 30,
  },
  ContainerAvaliação: {
    flexDirection: "row",
    gap: 80,
    justifyContent: "flex-end",
    marginBottom: 25,
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
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
