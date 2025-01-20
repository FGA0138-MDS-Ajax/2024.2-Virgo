import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";

import OnboardingItem from "./OnboardingItem";
import slides from "../app/slides";
import Passpage from "./Passpage";
import ButtonSlides from "./ButtonSlides";

export default Onboarding = () => {
  const handleBack = () => {
    router.back();
  };

  const router = useRouter();
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Último item.");
      router.push("/fotoExemplo");
    }
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  console.log(slides);

  const viewbleItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={{ flex: 3 }}>
      {currentIndex === 0 && (
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={50}
            color="#164B2A"
          />
        </TouchableOpacity>
      )}
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { userNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewbleItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <ButtonSlides
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
      <Passpage data={slides} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 70,
    left: 20,
    zIndex: 10,
  },
});
