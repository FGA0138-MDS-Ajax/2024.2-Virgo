import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Photo_perfil from "../../assets/svg/photoPerfil";

const Perfil = () => {
  const router = useRouter();

  const handleAlterarSenha = () => {
    console.log("Redirecionando para Redefinição de senha...");
    router.push("/forgotPasswordReset"); // Redireciona para a tela de login
  };

  const handlelogout = () => {
    console.log("Redirecionando para tela de ínicio...");
    router.push("/login"); // Redireciona para a tela de login
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <TouchableOpacity style={[styles.icon]}>
          <Photo_perfil></Photo_perfil>
        </TouchableOpacity>
        <Text style={styles.name}>Nome</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Perfil</Text>
        <Text style={styles.info}>Agronomo</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.info}>email@gmail.com</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>CREA</Text>
        <Text style={styles.info}>111222/df</Text>
        <View style={styles.line} />
      </View>
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
    gap: 20,
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
    fontSize: 18,
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
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },
  info: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttons: {
    paddingTop: 10,
    width: "95%",
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
