import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400, // Ajuste o tamanho conforme necessário
    height: 400, // Ajuste o tamanho conforme necessário
    resizeMode: "contain", // Ajuste o modo de redimensionamento conforme necessário
    marginBottom: 20, // Espaçamento entre a imagem e o texto
  },
  title: {
    fontWeight: "600",
    fontSize: 28,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
    color: "#000",
    textAlign: "center",
  },
  description: {
    fontWeight: "500",
    marginTop: 3,
    fontSize: 17,
    color: "#656565",
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
