import { BlurView } from "expo-blur";
import { Image as ImageRaw } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "tamagui";

export const Container = styled(SafeAreaView, {
	backgroundColor: "$background",

	display: "flex",
	flexDirection: "column",
	flex: 1,

	justifyContent: "flex-start",
	alignItems: "center",

	paddingVertical: 32,
});

export const Blur = styled(BlurView, {
	position: "absolute",
	inset: 0,
});

export const Image = styled(ImageRaw, {
	position: "absolute",
	inset: 0,
});
