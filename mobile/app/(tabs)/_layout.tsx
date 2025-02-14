import { NavigationIcon } from "@/components/navigation/icon";
import { navigationStyles } from "@/components/navigation/styles";
import config from "@/tamagui.config";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

const Layout = () => {
	const scheme = useColorScheme();

	return (
		<>
			<ThemeProvider value={scheme === "dark" ? DarkTheme : DefaultTheme}>
				<Tabs
					screenOptions={{
						headerShown: false,
						tabBarStyle: navigationStyles.navigation,
						tabBarActiveTintColor:
							scheme === "dark"
								? config.themes.dark.color.val
								: config.themes.light.color.val,
						tabBarButton: (props) => {
							const isFocused = props.accessibilityState?.selected ?? false;

							return <NavigationIcon focused={isFocused} {...props} />;
						},
						tabBarShowLabel: false,
					}}
				>
					<Tabs.Screen
						name="index"
						options={{
							title: "Play",
							tabBarIcon: ({ color, focused }) => {
								return (
									<Ionicons
										name={focused ? "game-controller-sharp" : "game-controller"}
										color={color}
										size={24}
									/>
								);
							},
						}}
					/>

					<Tabs.Screen
						name="about"
						options={{
							title: "About",
							tabBarIcon: ({ color, focused }) => {
								return (
									<Ionicons
										name={focused ? "newspaper-sharp" : "newspaper"}
										color={color}
										size={24}
									/>
								);
							},
						}}
					/>
				</Tabs>
			</ThemeProvider>
		</>
	);
};

export default Layout;
