import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Exemplo from "../assets/svg/image12.svg";

export default function InstrucoesScreen() {
  const router = useRouter();

  return(
    <View>
        <Exemplo>asd</Exemplo>
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
  
  button: {
    width: 270,
    height: 45,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#277345",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  
  pngImage: {
    marginBottom: 20,
  },
});
