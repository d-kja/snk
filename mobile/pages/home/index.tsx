import { YStack } from "tamagui";
import { Container, Header, Text } from "./styles";

export const HomePage = () => {
	return (
		<Container>
			<Header>Another snake game?</Header>

			<YStack gap={8}>
				<Text>
					Indeed. It's in fact another simple and minimal snake game that you
					know of, and there's nothing wrong with that.
				</Text>
				<Text>
					So what was my goal with this project? Learn and challenge myself with
					WASM integration for the core logic and Native's API for the UI
					rendering.
				</Text>
			</YStack>

			<Header>What am I using?</Header>

			<YStack gap={8}>
				<Text>
					For the WASM part, I'm using Rust and WASM Bindgen to compile Rust
					code into WASM and load it inside Native.
				</Text>
				<Text>
					As for the Native side, I'm using a library that let's me load WASM
					code inside Native. It's not the best option or most optimized, but it
					works.
				</Text>
			</YStack>
		</Container>
	);
};
