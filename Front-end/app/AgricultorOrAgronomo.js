import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconAgricultor from "../assets/svg/icon-agricultor.svg"; //instalar
import IconAgronomo from "../assets/svg/icon-agronomo.svg";
import IconAgricultorTeste from "../assets/svg/icon-agricultorTeste.svg";
import IconAgronomoTeste from "../assets/svg/icon-agronomoTeste.svg";

export default function LoginScreen() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleRegisterAgricultor = () => {
    // Simula o login
    console.log(
      "Selecionado tipo de usuário agricultor redirecionando para (registerAgricultor)..."
    );
    router.push("/registerAgricultor");
  };
  const handleRegiterAgronomo = () => {
    // Simula o login
    console.log(
      "Selecionado tipo de usuário agrônomo redirecionando para (registerAgronomo)..."
    );
    router.push("/registerAgronomo");
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="#164B2A" />
      </TouchableOpacity>

      <Text style={styles.title}>O que você é?</Text>
      <View style={styles.line} />
      <TouchableOpacity
        style={styles.optionAgricultor}
        onPress={handleRegisterAgricultor}
      >
        <IconAgricultorTeste
          style={styles.iconAgricultor}
        ></IconAgricultorTeste>
        <View style={styles.textContainer}>
          <Text style={styles.optionTitle}>Eu sou agricultor</Text>
          <Text style={styles.optionDescription}>
            Produzo e cuido das plantações diretamente no campo.
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionAgronomo}
        onPress={handleRegiterAgronomo}
      >
        <IconAgronomoTeste style={styles.iconAgricultor}></IconAgronomoTeste>
        <View style={styles.textContainer}>
          <Text style={styles.optionTitle}>Eu sou agrônomo</Text>
          <Text style={styles.optionDescription}>
            Dou suporte técnico e ajudo a melhorar a saúde e a produtividade das
            plantações.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
  optionAgricultor: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    width: "90%",
    height: 110,
    elevation: 3, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 }, // sombra no iOS
    shadowOpacity: 0.2, // sombra no iOS
    shadowRadius: 4, // sombra no iOS
  },
  optionAgronomo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    width: "90%",
    height: 110,
    elevation: 3, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 }, // sombra no iOS
    shadowOpacity: 0.2, // sombra no iOS
    shadowRadius: 4, // sombra no iOS
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#277345",
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 14,
    color: "#277345",
  },
  button: {
    backgroundColor: "#057B44",
    borderRadius: 8,
    padding: 16,
    height: 50,
    width: "90%",
    alignItems: "center",
    marginTop: 60,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  // Apenas exemplos de ícones como placeholders
  iconAgricultor: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  iconAgronomo: {
    width: 40,
    height: 40,
  },
  line: {
    width: "60%", // Ajusta a largura da linha
    height: 2, // Espessura da linha
    backgroundColor: "#057B44", // Cor da linha
    marginTop: 0, // Espaço entre o texto e a linha
    marginBottom: 35,
  },
});
