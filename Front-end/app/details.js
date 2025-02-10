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
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.diagnosisText}>{diagnosis}</Text>
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
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  diagnosisText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Detalhes;
