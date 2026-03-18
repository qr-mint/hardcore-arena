import { useEffect, useState } from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';

import { AppRouter } from './routes';
import { useAuthStore } from './store/auth';
import { useWalletStore } from './store/wallet';
import { TicketProvider } from './providers/tickets/provider';

import { Onboarding } from './components/Onboarding';

import './app.css';
import './i18n';

function App() {
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
                    try {
                        await getMe();
                    } catch {
                        await auth();
                    }
                } else {
                    await auth();
                }
            } catch (e) {
                console.error('Auth error:', e);
            } finally {
                setLoading(false); // важно всегда завершать loading
            }
        };
        if (loading) {
            fetchUser();
        }
        
    }, [ access_token, auth, getMe, loading ]);
        
    if (loading || !user || !access_token) {
        return <Onboarding />;
    }

    return (
        <TicketProvider>
            <AppRouter />
        </TicketProvider>
    )
}
export default App
