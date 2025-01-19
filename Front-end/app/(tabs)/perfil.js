import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
import Photo_perfil from "../../assets/svg/photoPerfil";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Perfil = () => {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUserData = async () => {
      try {
        // Recupera o userID do AsyncStorage
        const token = await AsyncStorage.getItem("token");
        const id = await AsyncStorage.getItem("userID");

        console.log("userID:", id);
        console.log("Token:", token);

        if (!token || !id) {
          console.log("Token received:", token);
          console.log("Token de autenticação não encontrado.");
          console.log("ID received:", id);
          console.log("ID não encontrado.");
          return;
        }

        const url = `http://192.168.0.160:3000/api/users/${id}`;

        const headers = {
          Authorization: `Bearer ${token}`, // Passando o token nos headers
        };

        const userResponse = await axios.get(url, { headers });
        const userData = userResponse.data;
        console.log("Dados do usuário:", userResponse.data);

        console.log("CREA:", userData.crea);

        setUserData(userResponse.data);
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    };

    getUserData();
  }, []);

  const handleAlterarSenha = () => {
    console.log("Redirecionando para Redefinição de senha...");
    router.push("/forgotPasswordReset"); // Redireciona para a tela de login
  };

  const handlelogout = async () => {
    try {
      // Limpa todos os dados armazenados no AsyncStorage
      await AsyncStorage.clear();
      console.log("Dados do AsyncStorage apagados.");

      // Redireciona para a tela de login
      router.push("/login"); // Redireciona para a tela de login
    } catch (error) {
      console.error("Erro ao limpar o AsyncStorage:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <TouchableOpacity style={[styles.icon]}>
          <Photo_perfil></Photo_perfil>
        </TouchableOpacity>
        <Text style={styles.name}>
          {userData ? userData.name : "Carregando..."}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Perfil</Text>
        <Text style={styles.info}>
          {userData?.role === "AGRONOMO" ? "Agrônomo" : "Agricultor"}
        </Text>
        <View style={styles.line} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.info}>
          {userData ? userData.email : "Carregando..."}
        </Text>
        <View style={styles.line} />
      </View>

      {userData?.role === "AGRONOMO" && (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>CREA</Text>
          <Text style={styles.info}>
            {userData ? userData.crea : "Carregando..."}
          </Text>
          <View style={styles.line} />
        </View>
      )}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.buttonGreen]}
          onPress={handleAlterarSenha}
        >
          <Text style={styles.buttonText}>Alterar senha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonRed]}
          onPress={handlelogout}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  profile: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
    gap: 10,
  },
  icon: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderCurve: "continuous",
    shadowColor: "#000",
  },
  line: {
    width: "100%", // Ajusta a largura da linha
    height: 2, // Espessura da linha
    backgroundColor: "#B8B8B8", // Cor da linha
    marginTop: 3, // Espaço entre o texto e a linha
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  },
  infoContainer: {
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 30,
    gap: 7,
  },
  label: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttons: {
    paddingTop: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
    height: 50,
  },
  buttonGreen: {
    backgroundColor: "#057B44",
  },
  buttonRed: {
    backgroundColor: "#B71C1C",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
  },
});

export default Perfil;
