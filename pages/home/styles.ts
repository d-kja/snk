import { SafeAreaView } from "react-native-safe-area-context";
import { H1, styled, Text as TText } from "tamagui";

export const Container = styled(SafeAreaView, {
  backgroundColor: "$background",

  display: "flex",
  flexDirection: "column",
  flex: 1,

  gap: 12,

  paddingVertical: 32,
  paddingHorizontal: 24
})

export const Header = styled(H1, {
  fontSize: "$7",
  lineHeight: "$8"
})

export const Text = styled(TText, {
  color: "$color11",
  letterSpacing: "$11",
  textWrap: "pretty"
})
