import { type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";
import { type PlayerStore, createPlayerStore } from "./player.store";

interface StoreProviderProps {
	children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
	const playerStore = useRef<PlayerStore>();

	if (!playerStore.current) {
		playerStore.current = createPlayerStore(); // TODO: connect with API
	}

	return (
		<>
			<PlayerContext.Provider value={playerStore.current}>
				{children}
			</PlayerContext.Provider>
		</>
	);
};

const PlayerContext = createContext({} as PlayerStore);
export const usePlayerStore = () => {
	const context = useContext(PlayerContext);

	return useStore(context);
};
