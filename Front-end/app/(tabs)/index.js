import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.tam}>screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 200,
  },
  home: {
    justifyContent: "center",
    alignItems: "center",
  },
  tam: {
    fontSize: 40,
  },
});

export default Home;
