import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import {
	Button,
	Separator,
	SizableText,
	Tabs,
	Text,
	View,
	XStack,
	YStack,
} from "tamagui";
import { Blur, Container, Image } from "./styles";

export const GamePage = () => {
	const backgroundImage = require("../../assets/images/custom/bg-02.png");

	return (
		<Container paddingHorizontal={32} gap={24}>
			<XStack justifyContent="space-between" width={"100%"} opacity={0.7}>
				<YStack>
					<Text fontSize={10} fontWeight={"400"}>
						ACTIVE GAMES
					</Text>
					<Text fontSize={8} fontWeight={"300"}>
						LIST
					</Text>
				</YStack>

				<Text fontSize={10} fontWeight={"400"}>
					USER / OPTIONS
				</Text>
			</XStack>

			<YStack marginTop={60}>
				<Text fontSize={44} marginLeft={-24} fontWeight={"800"}>
					SNAKE GAME
				</Text>

				<Text
					fontSize={32}
					marginLeft={"auto"}
					marginRight={-24}
					fontWeight={"800"}
					opacity={0.45}
				>
					LAST PLAYED
				</Text>
			</YStack>

			<View
				backgroundColor={"$color.gray12Dark"}
				opacity={0.25}
				height={1.5}
				width={"100%"}
				marginTop={-4}
			/>

			<XStack marginLeft={"auto"} opacity={0.65}>
				<Link href="/games/snake-game" asChild>
					<Button
						paddingHorizontal={12}
						gap={2}
						borderRadius={12}
						variant="outlined"
					>
						<Text fontSize={18} fontWeight={"800"}>
							CONTINUE
						</Text>

						<AntDesign name="caretright" size={24} color="white" />
					</Button>
				</Link>
			</XStack>

			<Separator borderColor={"$backgroundTransparent"} marginVertical={12} />

			<Tabs
				defaultValue="games"
				orientation="horizontal"
				flexDirection="column"
				width={400}
				height={150}
				borderRadius="$4"
				borderWidth="$0.25"
				overflow="hidden"
				borderColor="$borderColor"
			>
				<Tabs.List disablePassBorderRadius="bottom">
					<Tabs.Tab
						focusStyle={{
							backgroundColor: "$color3",
						}}
						flex={1}
						value="games"
					>
						<SizableText fontFamily="$body">Games</SizableText>
					</Tabs.Tab>

					<Tabs.Tab
						focusStyle={{
							backgroundColor: "$color3",
						}}
						flex={1}
						value="score"
					>
						<SizableText fontFamily="$body">Scores</SizableText>
					</Tabs.Tab>
				</Tabs.List>

				<Separator />

				<Tabs.Content value="games">
					<Text>Example</Text>
				</Tabs.Content>

				<Tabs.Content value="score">
					<Text>Example</Text>
				</Tabs.Content>
			</Tabs>

			<Blur intensity={5} zIndex={-1}>
				<Image source={backgroundImage} filter="brightness(.6)" zIndex={-1} />
			</Blur>
		</Container>
	);
};
