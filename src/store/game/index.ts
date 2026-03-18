import { create } from 'zustand';
import { VERSION } from '@/store/config';
import { persist } from 'zustand/middleware';
import type { GameState, GameStore } from './types';
import { getGameUser } from '../../api/game';

const initialState: GameState = {
	data: null,
};

export const useGameStore = create<GameStore>()(
	persist(
		(set, get) => ({
			...initialState,
			loadGameData: async () => {
				const data = await getGameUser();
				set({ data });
			},
			setTickets: (tickets: number) => {
				const { data } = get();
				data.tickets = tickets;
				set({ data });
			}
		}),
		{
			name: 'game',
			version: VERSION,
		}
	)
);
