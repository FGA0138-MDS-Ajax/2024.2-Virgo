import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          title: "",
          headerShown: false,
          headerStyle: { backgroundColor: "#F5F5F5" },
          // gestureEnabled: false - função que evita o gesto de swipe | deixei habilitado para navegar de forma mais simples.
        }}
      >
        <>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="AgricultorOrAgronomo" />
          <Stack.Screen name="registerAgricultor" />
          <Stack.Screen name="forgotPassword" />
          <Stack.Screen name="forgotPasswordCheckEmail" />
          <Stack.Screen name="forgotPasswordReset" />
          <Stack.Screen name="passwordRedefinedSucess" />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="selectPlant" />
          <Stack.Screen name="instructions" />
          <Stack.Screen name="+not-found" />
        </>
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
