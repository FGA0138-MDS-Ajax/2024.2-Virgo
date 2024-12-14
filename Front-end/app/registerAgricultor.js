import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import Checkbox from "expo-checkbox";
import axios from "axios";

export default function LoginScreen() {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const url = "http://192.168.0.199:3000/api/users/";

  useEffect(() => {
    validateForm(); // Aciona a validação quando algum argumento muda
  }, [name, email, password1, password2, isChecked]);

  const validateForm = () => {
    let errors = {};
    // Validações
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name)) {
      errors.name = "Nome não pode conter números ou caracteres especiais";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email inválido.";
    }

    if (password1.length < 8) {
      errors.password1 = "A senha precisa ter no mínimo 6 dígitos.";
    }

    if (!(password2 == password1)) {
      errors.password2 = "As senhas precisam ser iguais.";
    }

    if (!isChecked) {
      errors.isChecked = "termos não aceitos";
    }
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = (name, email, password, crea) => {
    if (isFormValid) {
      console.log("Validando Forms!");
      axios
        .post(url, {
          name: name,
          email: email,
          password: password,
          role: "AGRICULTOR",
        })
        .then(function (response) {
          console.log(response);
          console.log("gg paizao");
          router.push("/home");
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log("Usuário cadastrado!, redirecionando a home...");
    } else {
      console.log("Forms com Erro (?).");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.line} />
      <View style={styles.register}>
        <View style={styles.label}>
          <View style={styles.input}>
            <Ionicons name="person" size={24} color="gray" paddingRight={5} />
            <TextInput
              style={styles.passinput}
              placeholder="Nome"
              placeholderTextColor="#aaa"
              keyboardType="default"
              value={name}
              onChangeText={setName}
            />
          </View>
          {name !== "" && errors.name && (
            <Text style={styles.error}>{errors.name}</Text>
          )}
        </View>

        <View style={styles.label}>
          <View style={styles.input}>
            <Ionicons name="mail" size={24} color="gray" paddingRight={5} />
            <TextInput
              style={styles.passinput}
              placeholder="E-mail"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          {email !== "" && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
        </View>

        <View style={styles.label}>
          <View style={styles.input}>
            <TextInput
              style={styles.passinput}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              secureTextEntry={!passwordVisible}
              value={password1}
              onChangeText={setPassword1}
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
          </View>
          {password1 !== "" && errors.password1 && (
            <Text style={styles.error}>{errors.password1}</Text>
          )}
        </View>

        <View style={styles.label}>
          <View style={styles.input}>
            <TextInput
              style={styles.passinput}
              placeholder="Confirmar Senha"
              placeholderTextColor="#aaa"
              secureTextEntry={!passwordVisible2}
              value={password2}
              onChangeText={setPassword2}
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
          </View>
          {password2 !== "" && errors.password2 && (
            <Text style={styles.error}>{errors.password2}</Text>
          )}
        </View>
      </View>

      <View style={styles.row}>
        <Checkbox
          style={styles.checkbox}
          color={isChecked ? "#000" : undefined}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={styles.termsText}>
          Ao criar uma conta, você concorda com os{" "}
          <Text style={styles.linkText}>Termos de Serviço</Text>, incluindo
          nossa <Text style={styles.linkText}>Política de Privacidade</Text>.
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
        disabled={!isFormValid}
        onPress={() => handleSubmit(name, email, password2)}
      >
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
  register: {
    width: "80%",
    gap: "15",
    marginBottom: "10",
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
    color: "#0D2717",
  },
  input: {
    flex: "1",
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  passinput: {
    width: "88%",
    backgroundColor: "#fff",
    color: "#424242",
  },
  eyeButton: {
    position: "absolute", // Coloca o botão dentro do input
    right: 10, // Alinha à direita
    top: 10, // Centraliza verticalmente no input
    zIndex: 1, // Garante que o botão fique sobre o input
  },
  error: {
    color: "red",
    fontSize: 12,
    marginLeft: "5",
    width: "90%",
    marginTop: "0",
  },
  label: {
    flexDirection: "column",
    gap: "2",
  },
  linkText: {
    color: "#0D2717",
    fontWeight: "bold",
  },
});
