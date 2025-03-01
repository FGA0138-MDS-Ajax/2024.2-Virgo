import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IconLogo from "../assets/svg/icon-logo.svg";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_LOGIN_URL } from "@env";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [authError, setAuthError] = useState(""); // Novo estado para erro geral

  const validate = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");
    setAuthError(""); // Limpa o erro geral

    if (!email) {
      setEmailError("Email não preenchido");
      valid = false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/.test(email)) {
      setEmailError("Email inválido");
      valid = false;
    }
    if (email.indexOf(" ") >= 0) {
      setEmailError("Email não pode ter espaços");
      valid = false;
    }

    if (password.length < 8) {
      setPasswordError("A senha precisa ter no mínimo 8 dígitos.");
      valid = false;
    }
    if (password.length === 0) {
      setPasswordError("Senha não preenchida");
      valid = false;
    }
    if (password.indexOf(" ") >= 0) {
      setPasswordError("Senha não pode ter espaços");
      valid = false;
    }

    return valid;
  };

  const handleLogin = async (email, password) => {
    if (!validate()) {
      console.log("Erro de validação. Não enviado ao backend.");
      return;
    }

    try {
      // Envia os dados de login para o backend
      const response = await axios.post(API_LOGIN_URL, { email, password });

      // Verifique a resposta recebida
      console.log("Resposta do backend:", response);

      // Pega o token da resposta
      const token = response.data.access_token;
      console.log("Token received:", token);

      // Verifique se o token existe
      if (!token) {
        console.error("Token não encontrado na resposta.");
        return;
      }

      const decoded = jwtDecode(token);
      console.log("Token decodificado", decoded);
      const userId = decoded.id;
      console.log("Tentando printar userId", userId);

      // Salva o token no AsyncStorage
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("userID", userId);

      console.log("Login bem-sucedido, redirecionando para a home...");
      console.log("gg paizao");
      router.push("/(tabs)");
    } catch (error) {
      // Imprime o erro para ajudar na depuração
      console.error("Erro ao fazer login:", error);

      // Exibe a mensagem de erro
      const errorMessage =
        error.response?.data?.message ||
        "E-mail ou senha incorretos. Tente novamente.";
      setAuthError(errorMessage); // Exibe o erro geral
    }
  };

  const handleRegister = () => {
    router.push("/register");
  };

  const handleForgotPassword = () => {
    router.push("/forgotPassword");
  };

  const handleAgricultorOrAgronomo = () => {
    router.push("/AgricultorOrAgronomo");
  };

  return (
    <View style={styles.container}>
      <IconLogo height="200" style={styles.logo}></IconLogo>
      <Text style={styles.title}>Entrar</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text) => {
            setEmail(text);
            setEmailError("");
          }}
          value={email}
          placeholderTextColor="#1A4D2E"
          keyboardType="email-address"
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.passwordInput}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError("");
          }}
          value={password}
          placeholder="Senha"
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
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}
      </View>

      <TouchableOpacity
        style={styles.forgotPasswordContainer}
        onPress={handleForgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin(email, password)}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {authError ? <Text style={styles.error}>{authError}</Text> : null}

      <TouchableOpacity
        style={styles.registerContainer}
        onPress={handleRegister}
      >
        <Text style={styles.registerText}>
          Não possui uma conta?{" "}
          <Text
            style={styles.registerLink}
            onPress={handleAgricultorOrAgronomo}
          >
            Cadastrar
          </Text>
        </Text>
      </TouchableOpacity>
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
    marginBottom: 50,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0D2717",
  },
  input: {
    width: 270,
    height: 45,
    borderWidth: 1,
    borderColor: "#277345",
    borderRadius: 6,
    paddingHorizontal: 10,
    color: "#000",
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: 270,
    height: 45,
    position: "relative", // Necessário para posicionar o botão de forma absoluta
    marginBottom: 18,
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
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginRight: "16%", //
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#0D2717",
    fontWeight: "bold",
  },
  button: {
    width: 270,
    height: 55,
    backgroundColor: "#057B44",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerContainer: {
    marginTop: 20,
  },
  registerText: {
    fontSize: 14,
    color: "#0D2717",
    textAlign: "center",
  },
  registerLink: {
    color: "#0D2717",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 2, // Espaçamento mínimo
    textAlign: "left",
  },
});
