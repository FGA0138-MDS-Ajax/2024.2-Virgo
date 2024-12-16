import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function forgotPassword() {
  const router = useRouter();

  const handleLogin = () => {
    // Simula o login
    console.log(
      "Recebeu a senha no email, redirecionando para tela de login..."
    );
    router.push("/login"); // Caminho real da tela de recuperação
  };

  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.card}>
        <Image
          source={require("../assets/images/app-mail.png")}
          style={styles.logo}
        />

        {/* Título */}
        <Text style={styles.cardTitle}>Verifique seu email</Text>

        <Text style={styles.cardContent}>
          Você recebeu uma nova SENHA, use ela para entrar no aplicativo. Caso
          queira mudar sua senha dentro do aplicativo, vá para perfil e alterar
          senha
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Voltar para tela de Entrar</Text>
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
    backgroundColor: "#FEFEFE",
  },
  card: {
    width: 316,
    height: 390,
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 84,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D2717",
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  cardContent: {
    fontSize: 13,
    color: "#1A4D2E",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    padding: 5,
  },
  input: {
    width: 284,
    height: 39,
    borderWidth: 1,
    borderColor: "#277345",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#000",
    backgroundColor: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    width: 284,
    height: 42,
    backgroundColor: "#057B44",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#000",
    fontWeight: "bold",
  },
});
