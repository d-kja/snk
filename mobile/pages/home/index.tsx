import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";

import { usePlayerStore } from "@/stores";
import config from "@/tamagui.config";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Button, Text, XStack } from "tamagui";
import { Container, Image, ImageContainer } from "./styles";

export const HomePage = () => {
	const backgroundImage = require("../../assets/images/custom/bg-02.png");
	const playerStore = usePlayerStore();

	const playerName = playerStore?.name;

	const hasEverPlayed = !!playerStore?.scores?.length;
	const lastScore = playerStore?.scores?.at(-1);

	return (
		<Container paddingHorizontal={32} gap={16}>
			<XStack justifyContent="space-between" alignItems="center" width={"100%"}>
				<Text fontWeight={700} fontSize={14} color={"$color.gray9Dark"}>
					{playerName}
				</Text>

				<Link href="/user" asChild>
					<Button
						padding={0}
						aspectRatio={"1/1"}
						backgroundColor={"transparent"}
					>
						<Octicons
							name="gear"
							size={18}
							color={config.tokens.color.gray9Dark.val}
						/>
					</Button>
				</Link>
			</XStack>

			<ImageContainer>
				<Image source={backgroundImage} />

				<Link href="/games/snake-game" asChild>
					<Button
						position="absolute"
						bottom={-25}
						paddingHorizontal={24}
						gap={4}
					>
						<Text fontSize={18} fontWeight={"800"}>
							START
						</Text>

						<AntDesign name="caretright" size={18} color="white" />
					</Button>
				</Link>
			</ImageContainer>

			<XStack
				gap={12}
				backgroundColor={"$color.gray1Dark"}
				borderWidth={4}
				borderColor={"$color.gray2Dark"}
				padding={12}
				borderRadius={12}
				marginTop={36}
			>
				{hasEverPlayed ? (
					<>
						<Text fontSize={18} fontWeight={"800"}>
							LAST SCORE
						</Text>

						<Text fontSize={18} fontWeight={"800"}>
							[{lastScore?.points}]
						</Text>
					</>
				) : (
					<Text fontSize={18} fontWeight={"800"}>
						WAITING FOR PLAYER
					</Text>
				)}
			</XStack>

			<LinearGradient
				style={{
					position: "absolute",
					inset: 0,
					zIndex: -1,
				}}
				colors={[
					"rgba(0,0,0,0.5)",
					"rgba(0,0,0,0.25)",
					"transparent",
					config.tokens.color.gray2Dark.val,
				]}
				dither={false}
			/>
		</Container>
	);
};
