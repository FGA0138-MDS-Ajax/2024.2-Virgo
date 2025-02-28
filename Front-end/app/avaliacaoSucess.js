import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function avalicaoSucess() {
  const router = useRouter();

  // Redireciona para a Home automaticamente após 5 segundos (opcional)
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 5000); // 5000ms = 5 segundos

    return () => clearTimeout(timer); // Limpa o timer quando o componente desmonta
  }, []);

  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle-outline" size={100} color="#057B44" />
      <View style={styles.text}>
        <Text style={styles.tittle}>Obrigado pela avaliação</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    gap: 10,
  },
  tittle: {
    fontSize: 25,
    color: "#0D2717",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 15,
  },
});
