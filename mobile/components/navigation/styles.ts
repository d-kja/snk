import config from "@/tamagui.config";
import { StyleSheet } from "react-native";
import { Button, styled } from "tamagui";

export const navigationStyles = StyleSheet.create({
  navigation: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',

    borderColor: config.tokens.color.gray6Dark.val,
    borderWidth: 2,
    borderTopWidth: 2,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,

    position: 'absolute',
    bottom: 42,
    marginHorizontal: 124,

    height: 64,

    paddingHorizontal: 2,
    borderRadius: 9999,
    elevation: 5,
  }
})

export const NavigationButton = styled(Button, {
  unstyled: true,

  position: 'relative',
  top: 16,

  display: 'flex',
  flexDirection: 'row',
  flex: 1,

  maxWidth: 44,
  marginHorizontal: 'auto',

  justifyContent: 'center',
  alignItems: 'center',

  paddingHorizontal: 34,
  paddingVertical: 24,

  borderRadius: 24,

  enterStyle: {
    opacity: 0,
    y: 10,
    scale: 0.9,
  },
  exitStyle: {
    opacity: 0,
    y: -10,
    scale: 0.9,
  },

  variants: {
    focused: {
      true: {
        backgroundColor: "$color.gray6Dark",
      },
      false: {
        backgroundColor: "$backgroundTransparent",
      }
    }
  }
})
