import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

const cardHistory = ({ imageUri, diagnosis, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.diagnosisText}>{diagnosis}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#057B44",
    height: 110,
    borderRadius: 15,
    borderCurve: "continuous",
    padding: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  diagnosisText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default cardHistory;
