import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

const colors = {
  primary: "#057B44", // Cor quando a aba está selecionada
  grey: "#7D7D7D", // Cor quando a aba está inativa
};
const icons = {
  index: (props) => (
    <Octicons name="home" size={26} color={colors.grey} {...props} />
  ),
  historico: (props) => (
    <MaterialIcons name="history" size={30} color={colors.grey} {...props} />
  ),
  perfil: (props) => (
    <Ionicons name="person-outline" size={26} color={colors.grey} {...props} />
  ),
};

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // Verifique se existe uma chave correspondente em icons
        const IconComponent = icons[route.name];
        const icon = IconComponent
          ? IconComponent({ color: isFocused ? colors.primary : colors.grey })
          : null;

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icon}
            <Text
              style={{
                color: isFocused ? colors.primary : colors.grey,
                fontSize: 13,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

export default TabBar;
