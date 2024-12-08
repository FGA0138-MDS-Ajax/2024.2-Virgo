import { useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons"; // Instale a biblioteca react-native-vector-icons

export default function LoginScreen() {
  const router = useRouter();

  const handleHome = () => {
    // Simula o login
    console.log("Cadastro bem-sucedido, redirecionando para (tabs)...");
    router.replace("(tabs)");
  };

  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.line} />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
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
        placeholder="Confirmar senha"
        placeholderTextColor="#aaa"
        secureTextEntry
      />
      <View style={styles.row}>
        <Checkbox
          style={styles.checkbox}
          color={isChecked ? "#000" : undefined}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text>
          Ao criar uma conta, você concorda com os Termos de Serviço, incluindo
          nossa Política de Privacidade
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleHome}>
        <Text style={styles.buttonText}>Cadastrar</Text>
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
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "#000", // Garante que o texto digitado seja visível
    backgroundColor: "#fff", // Fundo branco para evitar conflito
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2, // Opacidade da sombra no iOS
    shadowRadius: 5, // Raio da sombra no iOS
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 15,
    paddingLeft: 60,
    paddingRight: 60,
  },
  checkbox: {
    marginRight: 8,
  },
  line: {
    width: "50%", // Ajusta a largura da linha
    height: 2, // Espessura da linha
    backgroundColor: "#057B44", // Cor da linha
    marginTop: 0, // Espaço entre o texto e a linha
    marginBottom: 35,
  },
});
