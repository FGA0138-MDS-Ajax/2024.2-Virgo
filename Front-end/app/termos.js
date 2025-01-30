import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, View, ScrollView,TouchableOpacity, Linking } from "react-native";
import { Link } from "expo-router";

export default function Termos() {
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
                Termos de Serviço
            </Text>
            <Text style={styles.heading}>Introdução</Text>
            <Text style={styles.text}>
            Bem-vindo ao nosso aplicativo Cuidar Verde. Este App foi desenvolvido como parte de um projeto universitário de caráter open source, com o objetivo de contribuir para o desenvolvimento acadêmico e avanço do conhecimento na área de agricultura e tecnologia. O uso do App implica na aceitação destes Termos de Serviço.
            </Text>
            <Text style={styles.heading}>Propósito do App</Text>
            <Text style={styles.text}>
            O Cuidar Verde foi projetado para auxiliar pequenos agricultores na identificação de doenças em plantas por meio de fotografias. Os resultados fornecidos pelo App são indicativos e não substituem a consulta com profissionais especializados em agricultura ou fitopatologia.
            </Text>
            <Text style={styles.heading}>Uso do Serviço</Text>
            <Text style={styles.text}>
            O Cuidar Verde é disponibilizado gratuitamente para fins educativos e experimentais;
            </Text>
            <Text style={styles.text}>
            Você é responsável por garantir que as fotos enviadas sejam de sua própria autoria e não violem direitos de terceiros.
            </Text>
            <Text style={styles.text}>
            O Cuidar Verde é uma ferramenta confiável desenvolvida para auxiliar na identificação de doenças em plantas, mas, como qualquer tecnologia, pode apresentar pequenas limitações devido ao seu caráter acadêmico.
            </Text>
            <Text style={styles.heading}>Propriedade Intelectual</Text>
            <Text style={styles.text}>
            Este é um projeto open source. O código-fonte está disponível publicamente e pode ser utilizado conforme os termos da licença open source especificada no repositório oficial.
            </Text>
            <Text style={styles.text}>
            Todo o conteúdo gerado pelo App (resultados e análises) é fornecido Tsob a mesma licença para fins de aprendizado e pesquisa.
            </Text>
            <Text style={styles.heading}>Limitação de Responsabilidade</Text>
            <Text style={styles.text}>
            O Cuidar Verde é fornecido no formato atual e está em constante evolução.
            </Text>
            <Text style={styles.text}>
            Procuramos oferecer um serviço confiável, mas o usuário deve estar ciente de que, por se tratar de um projeto acadêmico, podem ocorrer limitações ou inconsistências nos resultados apresentados.
            </Text>
            <Text style={styles.text}>
            Recomendamos a consulta com um profissional especializado em casos críticos ou quando necessário.
            </Text>
            <Text style={styles.heading}>Atualizações nos Termos</Text>
            <Text style={styles.text}>
            Reservamo-nos o direito de atualizar estes Termos de Serviço. Alterações serão informadas através do próprio aplicativo ou do repositório oficial {" "}
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