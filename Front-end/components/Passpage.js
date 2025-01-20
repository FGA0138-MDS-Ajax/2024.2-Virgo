import React from "react";
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native";

export default Passpage = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{ justifyContent: "center", flexDirection: "row", height: 64 }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#057B44",
    marginHorizontal: 8,
  },
});
