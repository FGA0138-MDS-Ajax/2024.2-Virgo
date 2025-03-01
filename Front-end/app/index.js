import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CuidarVerde from "../assets/svg/CuidarVerde.svg";
import IconLogo from "../assets/svg/icon-logo.svg";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Redirecionando para /login...");
    router.push("/login"); // Redireciona para a tela de login
  };

  const handleRegister = () => {
    console.log("Redirecionando para /register...");
    router.push("/AgricultorOrAgronomo"); // Redireciona para a tela de cadastro
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <IconLogo height="200" style={styles.logo}></IconLogo>

      {/* Imagem PNG abaixo do logo */}
      <CuidarVerde style={styles.pngImage}></CuidarVerde>

      {/* Botão "Já tenho conta" */}
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Já tenho conta</Text>
      </TouchableOpacity>

      {/* Botão "Criar conta" */}
      <TouchableOpacity
        style={[styles.button, styles.shadow]}
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        Ao criar uma conta, você concorda com os{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("termos")}
        >
          Termos de Serviço
        </Text>
        , incluindo nossa{" "}
        <Text
          style={styles.linkText}
          onPress={() => navigation.navigate("politica")}
        >
          Política de Privacidade
        </Text>
        .
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
    marginTop: -50,
  },
  icon: {
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#0D2717",
  },
  button: {
    width: 270,
    height: 45,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#277345",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "#057B44",
    fontSize: 16,
    fontWeight: "bold",
  },
  termsText: {
    width: 270,
    fontSize: 11,
    color: "#1A4D2E",
    textAlign: "left",
    marginTop: 10,
    marginLeft: 10,
    lineHeight: 14,
  },
  linkText: {
    color: "#0D2717",
    fontWeight: "bold",
  },
  pngImage: {
    marginBottom: 20,
  },
  op: {
    alignItems: "center",
  },
});
