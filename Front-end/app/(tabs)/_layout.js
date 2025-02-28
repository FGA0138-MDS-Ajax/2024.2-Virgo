import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import TabBar from "../../components/TabBar";

const _layout = () => {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff", // Cor do fundo do Header
          height: 90, // Altura do Header
        },
        headerTitleStyle: {
          color: "#000", // Cor do texto do Header
        },
      }}
    >
      <Tabs.Screen
        name="historico"
        options={{
          title: "Historico",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
