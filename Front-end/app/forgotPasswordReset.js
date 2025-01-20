import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function forgotPassword() {
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [newPasswordError, setnewPasswordError] = useState("");
  const [authError, setAuthError] = useState("");

  const validate = () => {
    let valid = true;
    setCurrentPasswordError("");
    setnewPasswordError("");

    if (currentPassword.length < 8) {
      setCurrentPasswordError("A senha precisa ter no mínimo 8 dígitos.");
      valid = false;
    }
    if (currentPassword.length === 0) {
      setCurrentPasswordError("Senha não preenchida");
      valid = false;
    }
    if (currentPassword.indexOf(" ") >= 0) {
      setCurrentPasswordError("Senha não pode ter espaços");
      valid = false;
    }
    if (newPassword.length < 8) {
      setnewPasswordError("A senha precisa ter no mínimo 8 dígitos.");
      valid = false;
    }
    if (newPassword.length === 0) {
      setnewPasswordError("Senha não preenchida");
      valid = false;
    }
    if (newPassword.indexOf(" ") >= 0) {
      setnewPasswordError("Senha não pode ter espaços");
      valid = false;
    }

    return valid;
  };

  const handlePasswordRefined = async (currentPassword, newPassword) => {
    if (!validate()) {
      console.log("Erro de validação. Não enviado ao backend.");
      return;
    }

    try {
      // Recuperando o token do AsyncStorage
      const token = await AsyncStorage.getItem("token"); // Token de autenticação
      const id = await AsyncStorage.getItem("userID");

      console.log("userID:", id);
      console.log("Token:", token);

      if (!token) {
        console.log("Token received:", token);
        console.log("Token de autenticação não encontrado.");
        return;
      }

      const url = `http://192.168.0.160:3000/api/users/${id}`; // URL para redefinir a senha

      const data = {
        currentPassword: currentPassword,
        newPassword: newPassword,
      };

      const headers = {
        Authorization: `Bearer ${token}`, // Passando o token nos headers
      };

      const response = await axios.patch(url, data, { headers });

      console.log(
        "Senha redefinida com sucesso, redirecionando para a página de sucesso..."
      );
      router.push("/passwordRedefinedSucess");
    } catch (error) {
      console.error("Erro ao redefinir a senha:", error);
      const errorMessage =
        error.response?.data?.message || "Erro ao tentar redefinir a senha.";
      setAuthError(errorMessage); // Exibe o erro geral
    }
  };

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  return (
    <View style={styles.container}>
      {/* Card */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="#164B2A" />
      </TouchableOpacity>
      <View style={styles.card}>
        {/* Título */}
        <Text style={styles.cardTitle}>Redefinição de senha</Text>

        {/* Campo de senha com botão de visibilidade */}
        <View style={styles.inputContainer1}>
          <TextInput
            style={styles.passwordInput}
            onChangeText={setcurrentPassword}
            value={currentPassword}
            placeholder="Senha atual"
            placeholderTextColor="#1A4D2E"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
          {currentPasswordError ? (
            <Text style={styles.error}>{currentPasswordError}</Text>
          ) : null}
        </View>

        {/* Campo de confirmar senha com botão de visibilidade */}
        <View style={styles.inputContainer2}>
          <TextInput
            style={styles.passwordInput}
            onChangeText={setnewPassword}
            value={newPassword}
            placeholder="Nova Senha"
            placeholderTextColor="#1A4D2E"
            secureTextEntry={!passwordVisible2}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setPasswordVisible2(!passwordVisible2)}
          >
            <Ionicons
              name={passwordVisible2 ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
          {newPasswordError ? (
            <Text style={styles.error}>{newPasswordError}</Text>
          ) : null}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePasswordRefined(currentPassword, newPassword)}
        >
          <Text style={styles.buttonText}>Redefinir</Text>
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
    backgroundColor: "#F5F5F5",
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 10,
  },
  card: {
    width: 316,
    height: 390,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderCurve: "continuous",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    padding: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D2717",
    marginBottom: 20,
    marginTop: 50,
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer1: {
    width: 270,
    height: 45,
    position: "relative", // Necessário para posicionar o botão de forma absoluta
    marginBottom: 25,
  },
  inputContainer2: {
    width: 270,
    height: 45,
    position: "relative", // Necessário para posicionar o botão de forma absoluta
    marginBottom: 25,
  },
  passwordInput: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#277345",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingRight: 40, // Garante que o texto não fique sob o botão
    color: "#000",
    backgroundColor: "#fff",
  },
  eyeButton: {
    position: "absolute", // Coloca o botão dentro do input
    right: 10, // Alinha à direita
    top: 10, // Centraliza verticalmente no input
    zIndex: 1, // Garante que o botão fique sobre o input
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
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 2, // Espaçamento mínimo
    textAlign: "left",
  },
});
