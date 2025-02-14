import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HistoryCard from "../../components/cardHistory";
import { fetchHistory } from "../../services/historyService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Historico = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const SERVER_URL = "http://192.168.0.160:3000/uploads/"; // Ajuste se necessário

  useEffect(() => {
    const loadHistory = async () => {
      const token = await AsyncStorage.getItem("token");
      const userId = await AsyncStorage.getItem("userID");

      if (!userId || !token) return;

      const data = await fetchHistory(userId, token);
      setHistory(data);
      setLoading(false);
    };

    loadHistory();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#057B44" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HistoryCard
            imageUri={`${SERVER_URL}${item.foto}`} // 🔹 Concatenando a URL correta da imagem
            diagnosis={item.diagnostico}
            onPress={() =>
              navigation.navigate("details", {
                imageUri: `${SERVER_URL}${item.foto}`,
                diagnosis: item.diagnostico,
              })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
});

export default Historico;
