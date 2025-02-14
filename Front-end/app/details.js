import React from "react";
import { useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Detalhes = () => {
  const route = useRoute();
  const router = useRouter();
  const { imageUri, diagnosis } = route.params || {};

  const handleBack = () => {
    router.back();
  };
  <TouchableOpacity onPress={handleBack} style={styles.backButton}>
    <Ionicons name="arrow-back-circle-outline" size={50} color="#164B2A" />
  </TouchableOpacity>;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="#164B2A" />
      </TouchableOpacity>
      <View style={styles.contImage}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
      <Text style={styles.diagnosisText}>{diagnosis}</Text>
      <Text style={styles.description}>
        O diagnóstico acima foi feito por nossa inteligência artificial, mas não
        substitui a avaliação de um profissional. Consulte um especialista para
        mais precisão.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 10,
  },
  contImage: {
    justifyContent: "center",
    alignItems: "center",
    width: "120%",
    height: 310,
    backgroundColor: "#057B44",
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  diagnosisText: {
    fontSize: 30,
    fontWeight: 500,
    marginTop: 30,
    textAlign: "center",
  },
  description: {
    fontWeight: "400",
    marginTop: 10,
    fontSize: 16,
    color: "#656565",
    textAlign: "center",
    paddingHorizontal: 15,
  },
});

export default Detalhes;
