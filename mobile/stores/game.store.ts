import { createStore } from "zustand";

const DEFAULT_STATE = {
	points: 0,
	length: 3,
	position: [0, 0],
	startTime: null,
	endTime: null,
};

export type GameState = typeof DEFAULT_STATE & {
	position: [number, number];
	startTime: Date | null;
	endTime: Date | null;
};
export type GameStore = ReturnType<typeof createGameStore>;

export const createGameStore = () => {
	const store = createStore();

	return store((set) => {
		return {
			...DEFAULT_STATE,
			addPoint: () =>
				set((previous: GameState) => ({
					points: previous.points + 1,
					length: previous.length + 1,
				})),
			updatePosition: (x: number, y: number) =>
				set(() => ({
					position: [x, y],
				})),
			startGame: () =>
				set(() => ({
					startTime: new Date(),
				})),
			endGame: () =>
				set(() => ({
					endTime: new Date(),
				})),
			reset: () => set(() => DEFAULT_STATE),
		};
	});
};

export const gameStore = createGameStore();
