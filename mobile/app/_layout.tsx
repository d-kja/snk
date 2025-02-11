import config from "@/tamagui.config";
import { TamaguiProvider } from "tamagui";
import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar"

SplashScreen.preventAutoHideAsync()

function RootLayout() {
  const scheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  })

  useEffect(() => {
    if (!fontsLoaded) return

    SplashScreen.hideAsync()
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return <TamaguiProvider config={config} defaultTheme={scheme ?? "dark"}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>

    <StatusBar style="auto" />
  </TamaguiProvider>;
}

export default RootLayout
