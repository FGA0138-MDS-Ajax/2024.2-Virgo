import React, { useEffect } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import IconLogo from "../assets/svg/icon-logo.svg";
import CuidarVerdeWelcome from "../assets/svg/CuidarVerdeWelcome";

export default function WelcomeModal() {
  const router = useRouter();

  // Redireciona para a Home automaticamente após 5 segundos (opcional)
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 5000); // 5000ms = 5 segundos

    return () => clearTimeout(timer); // Limpa o timer quando o componente desmonta
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        <IconLogo height="100" style={styles.logo}></IconLogo>
        <View style={styles.tittle}>
          <Text style={styles.textBemvindo}>Bem vindo ao </Text>
          <CuidarVerdeWelcome style={styles.cuidarVerde}></CuidarVerdeWelcome>
        </View>
        <Text style={styles.messageText}>
          Sua conta está pronta para uso. Você será redirecionado em instantes.
        </Text>
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
  logo: {
    marginBottom: 20,
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textBemvindo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  messageText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  cuidarVerde: {
    marginBottom: 10,
  },
  tittle: {
    flexDirection: "row", // Organiza os textos na mesma linha
    alignItems: "center", // Centraliza verticalmente
    gap: 5,
  },
});
