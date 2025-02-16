import { Image as ImageRaw } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, styled } from "tamagui";

export const Container = styled(SafeAreaView, {
	backgroundColor: "$background",

	display: "flex",
	flexDirection: "column",
	flex: 1,

	justifyContent: "flex-start",
	alignItems: "center",

	paddingVertical: 32,
});

export const ImageContainer = styled(View, {
	position: "relative",

	display: "flex",
	flexDirection: "column",
	flex: 1,

	maxHeight: "65%",
	maxWidth: "97.25%",
	width: "100%",

	justifyContent: "center",
	alignItems: "center",

	borderColor: "$backgroundFocus",
	borderWidth: 4,
	borderRadius: 12,

	boxShadow: "0px 4px 24px 0px",
	shadowColor: "$color.gray3Dark",
	shadowOpacity: 1,
});

export const Image = styled(ImageRaw, {
	position: "absolute",
	inset: 0,

	borderRadius: 12,
});
