import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider } from "tamagui";

import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

import { StoreProvider } from "@/stores";
import config from "@/tamagui.config";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

function RootLayout() {
	const scheme = useColorScheme();
	const [fontsLoaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	});

	useEffect(() => {
		if (!fontsLoaded) return;

		SplashScreen.hideAsync();
	}, [fontsLoaded]);

	if (!fontsLoaded) return null;

	return (
		<TamaguiProvider config={config} defaultTheme={scheme ?? "dark"}>
			<ThemeProvider value={scheme === "dark" ? DarkTheme : DefaultTheme}>
				<StoreProvider>
					<Stack>
						<Stack.Screen name="(tabs)" options={{ headerShown: false }} />

						<Stack.Screen
							name="games/snake-game"
							options={{ headerShown: false, title: "Game" }}
						/>
						<Stack.Screen
							name="user/index"
							options={{ headerShown: false, title: "Player" }}
						/>
					</Stack>
				</StoreProvider>
			</ThemeProvider>

			<StatusBar style="auto" />
		</TamaguiProvider>
	);
}

export default RootLayout;
