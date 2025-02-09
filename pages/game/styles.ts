import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "tamagui";

export const Container = styled(SafeAreaView, {
  backgroundColor: "$background",

  display: "flex",
  flexDirection: "column",
  flex: 1,

  justifyContent: 'center',
  alignItems: 'center',

  paddingVertical: 32
})
