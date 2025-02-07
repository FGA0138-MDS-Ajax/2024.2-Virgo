import { StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function instructions() {
  const router = useRouter();

  const handleMenu = () => {
    router.push("/(tabs)");
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

  const [diagnostico, setDiagnostico] = useState("");
  useEffect(() => {
    const getImageAndDiagnosis = async () => {
      try {
        const uri = await AsyncStorage.getItem("PlantImage");
        const prediction = await AsyncStorage.getItem("PlantPrediction");

        console.log("Imagem recuperada:", uri);
        console.log("Diagnóstico recuperado:", prediction);

        if (uri) setImageUri(uri);
        if (prediction) setDiagnostico(prediction);
      } catch (error) {
        console.error("Erro ao recuperar os dados:", error);
      }
    };

    getImageAndDiagnosis();
  }, []);

  return (
    <View style={styles.container}>
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
      <View style={styles.ContainerPraga}>
        <Text style={styles.nomePraga}>
          {diagnostico || "Carregando diagnóstico..."}
        </Text>
        <Text style={styles.description}>
          O diagnóstico acima foi feito por nossa inteligência artificial, mas
          não substitui a avaliação de um profissional. Consulte um especialista
          para mais precisão.
        </Text>
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
    position: "absolute",
    marginTop: 490,
  },
  ContainerImage: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 50,
    width: "100%",
    backgroundColor: "#057B44",
  },
  nomePraga: {
    fontSize: 30,
    fontWeight: 500,
  },
  description: {
    fontWeight: "400",
    marginTop: 10,
    fontSize: 16,
    color: "#656565",
    textAlign: "center",
    paddingHorizontal: 15,
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
  noImageText: {
    fontSize: 15,
  },
});
