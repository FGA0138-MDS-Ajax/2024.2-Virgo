import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, View, ScrollView,TouchableOpacity, Linking } from "react-native";
import { Link } from "expo-router";

export default function Politica() {
    const handleBack = () => {
    router.back();
    };
    const handleLinkPress = () => {
        Linking.openURL("https://github.com/FGA0138-MDS-Ajax/2024.2-Virgo");
    };
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="arrow-back-circle-outline" size={50} color="#164B2A" />
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.scrollContainer} persistentScrollbar={true}>
            <Text style={styles.texth1}>
                Política de Privacidade
            </Text>
            <Text style={styles.heading}>Apresentação</Text>
            <Text style={styles.text}>
            Esta Política de Privacidade descreve como coletamos, usamos e protegemos os dados dos usuários do Cuidar Verde. Este projeto é de caráter acadêmico e open source, e buscamos ser transparentes quanto ao uso das informações.
            </Text>
            <Text style={styles.heading}>Coleta de Dados</Text>
            <Text style={styles.text}>
            Dados Pessoais: Coletamos dados cadastrais (nome, e-mail, senha e número do CREA, caso o usuário seja um(a) agrônomo(a)). Dados de Uso: Fotografias enviadas pelo usuário, que são utilizadas para melhorar a precisão da inteligência artificial e também ficam armazenadas em um histórico acessível ao próprio usuário.
            </Text>
            <Text style={styles.heading}>Uso dos Dados</Text>
            <Text style={styles.text}>
            As fotografias enviadas são utilizadas exclusivamente para processar o diagnóstico de doenças em plantas.
            </Text>
            <Text style={styles.text}>
            Dados cadastrados, como o número do CREA, são utilizados para validar que o usuário é um(a) agrônomo(a) e para permitir feedback técnico sobre os diagnósticos fornecidos pelo App.
            </Text>
            <Text style={styles.text}>
            Nenhum dado será compartilhado com terceiros fora do escopo acadêmico.
            </Text>
            <Text style={styles.heading}>Armazenamento e Segurança</Text>
            <Text style={styles.text}>
            Os dados são armazenados em servidores seguros, com acesso restrito e criptografia.
            </Text>
            <Text style={styles.text}>
            O número do CREA é criptografado para garantir uma camada adicional de segurança.
            </Text>
            <Text style={styles.heading}>Direitos do Usuário</Text>
            <Text style={styles.text}>
            Você tem o direito de solicitar a exclusão de dados associados, como Nome, email, senha e CREA.
            </Text>
            <Text style={styles.text}>
            Para exercer seus direitos, entre em contato pelo e-mail fornecido no repositório oficial do projeto.
            </Text>
            <Text style={styles.heading}>Cookies e Tecnologias de Rastreamento</Text>
            <Text style={styles.text}>
            O App não utiliza cookies ou tecnologias de rastreamento atualmente.
            </Text>
            <Text style={styles.text}>
            No entanto, o aplicativo poderá ser atualizado no futuro para utilizar a localização geográfica do usuário com o objetivo de oferecer novas funcionalidades. Caso isso ocorra, os usuários serão devidamente notificados, e a política será atualizada para refletir tal mudança.
            </Text>

            <Text style={styles.heading}>Alterações na Política</Text>
            <Text style={styles.text}>
            Esta Política de Privacidade pode ser atualizada periodicamente. As alterações serão comunicadas através do próprio aplicativo ou do repositório oficial {" "}
            <Text style={styles.link} onPress={handleLinkPress}>
            https://github.com/FGA0138-MDS-Ajax/2024.2-Virgo
            </Text>
            </Text>
            
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:"50",
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    alignItems:"center",
  },
  scrollContainer: {
    paddingTop: 50,
    paddingRight: 15,
    alignItems:"center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#1A4D2E",
  },
  text: {
    fontSize: 16,
    color: "#1A4D2E",
    lineHeight: 24,
    marginBottom: 10,
    textAlign:"justify",
  },
  texth1: {
    fontSize: 30,
    justifyContent:"center",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#1A4D2E",
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 10,
    marginBottom: 20,
  },
  link: {
    color: "#1E90FF",
    textDecorationLine: "underline",
  },
});