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

  const [selected, setSelected] = useState(null); // Estado para armazenar a seleção

  console.log("Opção selecionada: ", selected);

  const checkFilename = async () => {
    const savedFilename = await AsyncStorage.getItem("PlantImageFilename");
    console.log("Filename salvo no AsyncStorage:", savedFilename);
  };
  checkFilename();

  const handleSend = async () => {
    if (!selected) return; // Se não estiver selecionado "bom" ou "ruim", nada acontece

    try {
      // Recupera o filename do AsyncStorage
      const filename = await AsyncStorage.getItem("PlantImageFilename");
      if (!filename) {
        console.error("Erro: Nenhum filename encontrado.");
        return;
      }

      // Define a URL com base na seleção do usuário
      const apiUrl =
        selected === "bom"
          ? "http://192.168.0.160:3000/api/files/upload_vote"
          : `http://192.168.0.160:3000/api/files/reject/${filename}`;

      // Define o método HTTP com base na seleção do usuário
      const method = selected === "bom" ? "POST" : "DELETE";

      // Envia a requisição
      const response = await fetch(apiUrl, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: selected === "bom" ? JSON.stringify({ filename }) : null,
      });

      if (response.ok) {
        router.push("/(tabs)");
        console.log("Avaliação enviada com sucesso!");
      } else {
        console.error("Erro ao enviar avaliação:", await response.text());
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
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
      <View style={styles.ContainerTextAvalia}>
        <Text style={styles.textAvalia}>
          Nos botões abaixo, você pode escolher se o diagnóstico da doença foi
          bom ou ou ruim.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.ContainerAvaliação}>
          <TouchableOpacity
            style={styles.labelAvalia}
            onPress={() => setSelected("bom")}
          >
            <FontAwesome6
              name="smile"
              size={80}
              color={selected === "bom" ? "#194A2C" : "#656565"}
            />
            <Text
              style={[
                styles.RuimBom,
                { color: selected === "bom" ? "#000" : "#656565" },
              ]}
            >
              Bom
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.labelAvalia}
            onPress={() => setSelected("ruim")}
          >
            <FontAwesome6
              name="face-frown"
              size={80}
              color={selected === "ruim" ? "#AE0000" : "#656565"}
            />
            <Text
              style={[
                styles.RuimBom,
                { color: selected === "ruim" ? "#000" : "#656565" },
              ]}
            >
              Ruim
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={handleSend}
            style={[styles.buttonGreen, { opacity: selected ? 1 : 0.5 }]} // Botão meio transparente se nada for selecionado
            disabled={!selected} // Desativa se nada estiver selecionado
          >
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
  ContainerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 170,
    width: "100%",
    backgroundColor: "#057B44",
  },
  containerPraga: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 500,
  },
  nomePraga: {
    fontSize: 30,
  },
  ContainerTextAvalia: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    marginTop: 550,
  },
  textAvalia: {
    fontSize: 16,
    fontWeight: "500",
    fontSize: 17,
    color: "#656565",
    textAlign: "center",
    paddingHorizontal: 30,
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
  disabledButton: {
    backgroundColor: "gray",
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: "blue",
  },
});
