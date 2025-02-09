import { Tabs } from "expo-router"
import Ionicons from "@expo/vector-icons/Ionicons"
import { useColorScheme } from "react-native";
import config from "@/tamagui.config";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

const Layout = () => {
  const scheme = useColorScheme();

  return <>
    <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: scheme === 'dark' ? config.themes.dark.color.val : config.themes.light.color.val
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => {
              return <Ionicons
                name={focused ? "home-sharp" : "home"}
                color={color}
                size={24}
              />
            },
          }}
        />

        <Tabs.Screen
          name="game"
          options={{
            title: "Play",
            tabBarIcon: ({ color, focused }) => {
              return <Ionicons
                name={focused ? "game-controller-sharp" : "game-controller"}
                color={color}
                size={24}
              />
            },
          }}
        />
      </Tabs>
    </ThemeProvider>
  </>;
}

export default Layout
