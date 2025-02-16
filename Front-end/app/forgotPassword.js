import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { API_FORGOT_PASSWORD_URL } from "@env";

export default function forgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validade = () => {
    let valid = true;
    setEmailError("");

    if (!email.includes("@")) {
      setEmailError("Email inválido");
      valid = false;
    }
    if (!email.includes(".com")) {
      setEmailError("Email inválido");
      valid = false;
    }
    if (email.length === 0) {
      setEmailError("Email não preenchido");
      valid = false;
    }
    if (email.indexOf(" ") >= 0) {
      setEmailError("Email não pode ter espaços");
      valid = false;
    }
    return valid;
  };

  const handleSend = (email) => {
    const isValid = validade(); // Chama a validação antes de enviar a requisição

    if (!isValid) {
      console.log("Erro de validação. Não enviado ao backend.");
      return; // Não envia ao backend se a validação falhou
    }

    const url = API_FORGOT_PASSWORD_URL;

    console.log("Enviando requisição para:", url);
    console.log("Dados enviados:", { email });

    axios
      .post(url, {
        email: email, //dados do email
      })
      .then(function (response) {
        console.log(
          "Email enviado com sucesso, redirecionando para próxima tela...",
          response
        );
        console.log("gg paizao");
        router.push("/forgotPasswordCheckEmail");
      })
      .catch(function (error) {
        console.log(
          "Erro recuperar senha:",
          error.response?.data || error.message
        );
      });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="#164B2A" />
      </TouchableOpacity>

      {/* Card */}
      <View style={styles.card}>
        {/* Título */}
        <Text style={styles.cardTitle}>Esqueci minha senha</Text>

        <Text style={styles.cardContent}>
          Digite o seu e-mail no campo abaixo e você receberá uma senha
          temporária no Email para acessar o aplicativo.
        </Text>
        <View styles={styles.emailForm}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholderTextColor="#1A4D2E"
            keyboardType="email-address"
          />
          <Text style={styles.error}>{emailError}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            validade();
            handleSend(email);
          }}
        >
          <Text style={styles.buttonText}>Enviar</Text>
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
    height: 290,
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
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D2717",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  cardContent: {
    fontSize: 15,
    color: "#1A4D2E",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    paddingHorizontal: 11,
  },
  input: {
    width: 284,
    height: 39,
    borderWidth: 1,
    borderColor: "#277345",
    borderRadius: 6,
    paddingHorizontal: 10,
    color: "#000",
    backgroundColor: "#fff",
    marginBottom: -10,
  },
  button: {
    width: 284,
    height: 42,
    backgroundColor: "#057B44",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 15,
    marginTop: 12,
  },
});
