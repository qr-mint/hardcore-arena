import i18n from '@/i18n';
import { create } from 'zustand';
import { VERSION } from '@/store/config';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { SettingsState, SettingsStore } from './types';

const initialState: SettingsState = {
	language: null,
	fiatCurrency: 'usd',
	cryptoCurrency: 'ton_ton',
	network: 'ton',
	controll: 'joystick',
	cameraMode: 'full'
};

export const useSettingsStore = create<SettingsStore>()(
	persist(
		(set) => ({
			...initialState,
			setLanguage: (language) => {
				i18n.changeLanguage(language);
				set({ language });
			},
			setFiatCurrency: (fiatCurrency: string) => {
				set({ fiatCurrency });
			},
			setCryptoCurrency: (cryptoCurrency: string) => {
				set({ cryptoCurrency });	
			},
			setNetwork: (network: 'ton' | 'kaia') => {
				set({ network });
			},
			setControll: (controll: 'joystick' | 'arrows') => {
				set({ controll });
			},
			setCameraMode: (cameraMode: 'full' | 'player') => {
				set({ cameraMode })
			}
		}),
		{
			name: 'settings',
			version: VERSION,
			storage: createJSONStorage(() => localStorage),
		}
	)
);
