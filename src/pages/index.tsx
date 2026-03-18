import { useContext, useEffect, useState } from 'react';
import { Trophy, Zap, Star, Users, Gamepad2, Coins, UserPlus, Settings, Ticket, Home, Wallet } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import BigNumber from 'bignumber.js';

import { ReferralPage } from './referral'
import { LeaderboardPage } from './leadboard'
import { TournamentsPage } from './tournaments/tournaments'
import { AchievementsPage } from './achievements'
import { LevelSelectPage } from './level_select';
import { ConnectContext } from '../components/Connect/provider';
import { useAuthStore } from '../store/auth';
import { useGameStore } from '../store/game'
import { useWalletStore } from '../store/wallet';
import { getTournamentBy } from '@/api/game/tournaments';
import { useOrderStatusPolling } from '@/hooks/useOrderStatusPolling';
import { PaymentProccesing } from '@/components/PaymentProccesing';
import { RefillTicketsModal } from '../components/RefillTicketsModal';
import { SettingsModal } from '../components/SettingsModal';
import { useTicket } from '@/providers/tickets';

export function GameMenu() {
  const { openRefillTickets } = useTicket();
  const [order, setOrder] = useState<any>({});
  const wallet = useWalletStore();
  const { user: commonUser } = useAuthStore();
  const { data, loadGameData } = useGameStore();
  const { t } = useTranslation();
  const connectors = useContext<ConnectContext>(ConnectContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home')
  const [showSettings, setShowSettings] = useState(false)
  const load = async () => {
      try {
        await loadGameData();
      } catch (err) {
        toast.error((err as any).message);
      }
    };
  useEffect(() => {  
    load();
  }, []);

  const handleOrderConfirmed = async () => {
		try {
      setOrder({});
      navigate(`/game?tourname_id=${order.tournament_id}&order_id=${order.id}`);
		} catch (err) {
			toast.error((err as any).message);
		}
	};

	const handleOrderError = async (error: any) => {
		toast.error((error as any).message);
	};

	useOrderStatusPolling(order.id,
		handleOrderConfirmed,
		handleOrderError,
	);
  
  if (!data || !commonUser) {
    return <></>;
  }

  const payAndPlay = async () => {
    if (!connectors.ton.connected) {
      await connectors.ton.connect();
      return;
    }
    try {
      const tournament = await getTournamentBy("daily");
      const data = await connectors.ton.sendTransaction({
			  token: 'ton',
			  type: 'join_jackpot',
			  network: 'ton',
        tournament_id: tournament.id
      });
    
      setOrder({
        id: data.gameTransaction.id,
        tournament_id: tournament.id,
        type: 'join_jackpot'
      });
    } catch (err) {
      toast.error((err as any).message);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col relative">
      {order.game_order_id && <PaymentProccesing t={t} />}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-16 h-16 bg-red-500 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-12 h-12 bg-blue-500 rounded-full animate-bounce" />
          <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-white rotate-45" />
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-yellow-400 rounded-full" />
          <div className="absolute bottom-1/3 right-20 w-16 h-16 bg-green-500 rounded-full animate-pulse" />
        </div>
      </div>

      <div className="relative flex-1 flex flex-col p-4 pb-24">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 mb-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold">
                {commonUser.username.charAt(0)}
              </div>
              <div>
                <p className="text-white font-semibold">{commonUser.username}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => openRefillTickets()}
                className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1.5 hover:bg-white/30 transition-colors"
              >
                <Ticket className="w-4 h-4 text-blue-300" />
                <span className="text-white font-bold">{data?.tickets}</span>
              </button>
              
              {!connectors.ton.connected ? (
                <button 
                  onClick={() => connectors.ton.connect()}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 backdrop-blur-sm rounded-xl px-3 py-1.5 transition-all hover:scale-105 active:scale-95"
                >
                  <Wallet className="w-4 h-4 text-white" />
                  <span className="text-white font-bold text-sm">{t('wallet')}</span>
                </button>
              ) : (
                <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1.5">
                  <Coins className="w-4 h-4 text-yellow-300" />
                  <span className="text-white font-bold">{new BigNumber(wallet.balance || 0).div(10 ** 9).toFixed(2)} TON</span>
                </div>
              )}
              
              <button 
                onClick={() => setShowSettings(true)}
                className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Settings className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {activeTab === 'home' && (
          <>
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-1 text-balance">
                Hardcore Arena
              </h1>
              <p className="text-purple-200 md:text-lg">{t('home.title')}</p>
            </div>

            <div className="flex-1 max-w-2xl mx-auto w-full">
              <div className="grid grid-cols-1 gap-3">
                <div
                  className="group relative overflow-hidden border-2 border-white/20 bg-white/15 backdrop-blur-md hover:bg-white/25 transition-all duration-300 cursor-pointer hover:scale-[1.02] rounded-xl"
                  onClick={payAndPlay}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="relative p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-0.5">{t('home.quickPlay.title')}</h3>
                      <p className="text-purple-100 text-sm">{t('home.quickPlay.condition', { amount: '0.05 TON' })}</p>
                    </div>
                    
                    <div className="px-3 py-1.5 bg-yellow-400/20 backdrop-blur-sm rounded-lg border border-yellow-400/30">
                      <p className="text-yellow-200 font-bold text-sm">0.05 TON</p>
                    </div>
                  </div>
                </div>

                <div
                  className="group relative overflow-hidden border-2 border-white/20 bg-white/15 backdrop-blur-md hover:bg-white/25 transition-all duration-300 cursor-pointer hover:scale-[1.02] rounded-xl"
                  onClick={() => setActiveTab('tournaments')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-700 opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="relative p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-0.5">{t('home.tournaments.title')}</h3>
                      <p className="text-purple-100 text-sm">{t('home.tournaments.subtitle')}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="group relative overflow-hidden border-2 border-white/20 bg-white/15 backdrop-blur-md hover:bg-white/25 transition-all duration-300 cursor-pointer hover:scale-[1.02] rounded-xl"
                  onClick={() => setActiveTab('levelSelect')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-500 opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="relative p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-0.5">{t('home.freeGame.title')}</h3>
                      <p className="text-purple-100 text-sm">{t('home.freeGame.subtitle')}</p>
                    </div>
                    
                    <div className="px-3 py-1.5 bg-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30">
                      <div className="flex items-center gap-1">
                        <Ticket className="w-4 h-4 text-blue-200" />
                        <p className="text-blue-100 font-bold text-sm">{data?.tickets}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'achievements' && <AchievementsPage t={t} onBack={() => setActiveTab('home')} />}
        {activeTab === 'invite' && <ReferralPage t={t} />}
        {activeTab === 'leaderboard' && <LeaderboardPage t={t} />}
        {activeTab === 'tournaments' && <TournamentsPage t={t} onBack={() => setActiveTab('home')} />}
        {activeTab === 'levelSelect' && <LevelSelectPage t={t} onBack={() => setActiveTab('home')} />}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/20 safe-bottom">
        <div className="flex items-center justify-around px-2 py-3 max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
              activeTab === 'home' 
                ? 'bg-white/20 text-white' 
                : 'text-purple-200 hover:text-white'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">{t('tabbar.home')}</span>
          </button>

          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
              activeTab === 'achievements' 
                ? 'bg-white/20 text-white' 
                : 'text-purple-200 hover:text-white'
            }`}
          >
            <Star className="w-5 h-5" />
            <span className="text-xs font-medium">{t('tabbar.achievements')}</span>
          </button>

          <button
            onClick={() => setActiveTab('invite')}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
              activeTab === 'invite' 
                ? 'bg-white/20 text-white' 
                : 'text-purple-200 hover:text-white'
            }`}
          >
            <UserPlus className="w-5 h-5" />
            <span className="text-xs font-medium">{t('tabbar.frens')}</span>
          </button>

          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
              activeTab === 'leaderboard' 
                ? 'bg-white/20 text-white' 
                : 'text-purple-200 hover:text-white'
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="text-xs font-medium">{(t('tabbar.leaderboard'))}</span>
          </button>
        </div>
      </div>
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </div>
  );
}
