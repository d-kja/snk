import { type StoreApi, createStore } from "zustand";

const DEFAULT_STATE = {
	name: "PLAYER 01",
	scores: [] as unknown as Score[],
};

type Score = { id: number; points: number; length: number; timeTaken: string };
export type PlayerState = typeof DEFAULT_STATE & {
	id?: number;
	token?: string;
	scores?: Score[];
};
export type PlayerStore = ReturnType<typeof createPlayerStore>;

export const createPlayerStore = <T extends PlayerState>(
	state?: T,
): StoreApi<PlayerState> => {
	const store = createStore<PlayerState>();
	const initialState = {
		...DEFAULT_STATE,
		...state,
	};

	return store((set) => {
		return {
			...initialState,
			updateUser: (state: T) =>
				set(() => ({
					...state,
				})),
		};
	});
};
