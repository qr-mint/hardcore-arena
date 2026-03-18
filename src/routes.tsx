import { Route, Routes } from 'react-router-dom';
import { type FunctionComponent, useEffect, useState } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';

import { Game } from './pages/game';
import { GameMenu } from './pages';
import { useAuthStore } from './store/auth';
import { useWalletStore } from './store/wallet';
import { TournameRoutes } from './pages/tournaments';
import { Onboarding } from './components/Onboarding';
import { TicketProvider } from './providers/tickets';

export const AppRouter: FunctionComponent = () => {
	const [loading, setLoading] = useState(true);
	const [connector] = useTonConnectUI();
	const { auth, getMe, access_token, user } = useAuthStore();
	const { setTonConnector } = useWalletStore();
	
	useEffect(() => {
		if (connector) setTonConnector(connector);
	}, [ connector, setTonConnector ]);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				if (access_token) {
					await getMe();
				} else {
					await auth();
				}
			} finally {
				setLoading(false);
			}
		};
		if (loading) {
			fetchUser();
		}
		console.log(loading, 'loading')
	}, [ access_token, auth, getMe, loading ]);
	
	if (loading || !user || !access_token) {
		return <Onboarding />;
	}
	

	return (
		<TicketProvider>
			<Routes>
				<Route path="/" element={<GameMenu />} />
				<Route path="/tournaments/*" element={<TournameRoutes />} />
      	<Route path="/game" element={<Game />} />
			</Routes>
		</TicketProvider>
	);
};