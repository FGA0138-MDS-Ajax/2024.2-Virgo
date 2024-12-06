import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MyCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      role="checkbox"
      aria-checked={checked}
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && <Ionicons name="checkmark" size={24} color="white" />}
    </Pressable>
  );
}

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Simula o login
    console.log("Cadastro bem-sucedido, redirecionando para (tabs)...");
    router.replace("(tabs)");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/icone_folha.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
        keyboardType="deafault"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="CREA"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <MyCheckbox />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  logo: {
    width: 179, // Ajuste conforme necessário
    height: 179,
    marginBottom: 20, // Espaço entre o logo e o título
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#000", // Garante que o texto digitado seja visível
    backgroundColor: "#fff", // Fundo branco para evitar conflito
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#057B44",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkboxBase: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 5,
  },
  checkboxChecked: {
    backgroundColor: "#000", // Cor de fundo quando marcado
  },
});
