import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { useTon } from './hooks/ton';
import { useLineKaia } from './hooks/kaia';

export const ConnectContext = createContext(null);

export interface ConnectInterface {
	allDisconnect: () => void;
	ton: any,
	kaia: any;
}

export const ConnectProvider = ({ children }) => {
	const ton = useTon();
	const kaia = useLineKaia();

	const allDisconnect = () => {
		if (ton.connected) {
			ton.disconnect();
		}
		if (kaia.connected) {
			kaia.disconnect();
		}
	};

	const value: ConnectInterface = {
		ton,
		kaia,
		allDisconnect
	};
	return (
		<ConnectContext.Provider value={value}>
			<>
				{children}
			</>
		</ConnectContext.Provider>
	);
};

ConnectProvider.propTypes = {
	children: PropTypes.any
};