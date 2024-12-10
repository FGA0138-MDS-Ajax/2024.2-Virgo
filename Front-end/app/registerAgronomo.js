import { useRouter } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView
} from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const router = useRouter();

  const handleHome = () => {
    // Simula o login
    console.log("Cadastro bem-sucedido, redirecionando para (tabs)...");
    router.replace("(tabs)");
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.line} />
      <View style={styles.label}>
        <Ionicons name='person' size={24} color="gray" paddingRight={5}/>
        <TextInput
          style={styles.passinput}
          placeholder="Nome"
          placeholderTextColor="#aaa"
          keyboardType="default"
        />
      </View>

      <View style={styles.label}>
        <Ionicons name='mail' size={24} color="gray" paddingRight={5}/>
        <TextInput
          style={styles.passinput}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.label}>
        <TextInput
          style={styles.passinput}
          placeholder="CPF"
          placeholderTextColor="#aaa"
          keyboardType="cpf"
        />
      </View>
      <View style={styles.label}>
        <TextInput
          style={styles.passinput}
          placeholder="CREA"
          placeholderTextColor="#aaa"
          keyboardType="crea"
        />
      </View>

      <View style={styles.label}>
        <TextInput
          style={styles.passinput}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Ionicons
            name={passwordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.label}>
        <TextInput
          style={styles.passinput}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry={!passwordVisible2}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setPasswordVisible2(!passwordVisible2)}
        >
          <Ionicons
            name={passwordVisible2 ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
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
    </SafeAreaView>
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
  label: {
    flex: "1",
    flexDirection: "row",
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
    alignItems: "center",
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
  passsection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  passinput: {
    width:"88%",
    backgroundColor: '#fff',
    color: '#424242',
  },
  eyeButton: {
    position: 'absolute', // Coloca o botão dentro do input
    right: 10, // Alinha à direita
    top: 10, // Centraliza verticalmente no input
    zIndex: 1, // Garante que o botão fique sobre o input
  },
});
