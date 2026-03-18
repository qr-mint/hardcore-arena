import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getCompanies, getLevels } from '../api/game/levels';
import {
  getLeaderboardByReferrals,
  getLeaderboardByCompany,
  getLeaderboardByLevels,
  getLeaderboardByTourname
} from '../api/game/leadboard';
import { getTournaments } from '../api/game/tournaments';
import { toast } from 'react-toastify';

interface LeaderboardPageProps {
  t: (key: string) => string;
}

export function LeaderboardPage({ t }: LeaderboardPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<'campaigns' | 'levels' | 'tournaments' | 'referrals'>('levels');
  const [selectedItem, setSelectedItem] = useState<{id: number, name: string} | null>(null)
  const [leaderboardType, setLeaderboardType] = useState<'time' | 'death'>();
  const [campaigns, setCampaigns] = useState([]);
  const [levels, setLevels] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [leaderboard] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        if (selectedCategory === "campaigns") {
          const companies = await getCompanies();
          setCampaigns(companies);
        } else if (selectedCategory === "levels") {
          const levels = await getLevels();
          setLevels(levels);
        } else if (selectedCategory === "referrals") {
          const referrals = await getLeaderboardByReferrals();
          setReferrals(referrals);
        } else if (selectedCategory === "tournaments") {
          const list = await getTournaments();
          setTournaments(list);
        }
      } catch (err) {
        toast.error((err as any).message);
      }
    }
    load();
  }, [selectedCategory]);

  useEffect(() => {
    const load = async () => {
      try {
        if (selectedCategory === "campaigns" && selectedItem && leaderboardType) {
          const companies = await getLeaderboardByCompany(selectedItem.id, leaderboardType);
          setCampaigns(companies);
        } else if (selectedCategory === "levels" && selectedItem && leaderboardType) {
          const levels = await getLeaderboardByLevels(selectedItem.id, leaderboardType);
          setLevels(levels);
        } if (selectedCategory === "tournaments" && selectedItem && leaderboardType) {
          const list = await getLeaderboardByTourname(selectedItem.id, leaderboardType);
          setTournaments(list);
        }
      } catch (err) {
        toast.error((err as any).message);
      }
    }
    if (selectedItem) {
      load();
    }
  }, [selectedItem, leaderboardType]);

  const getTitle = () => {
    if (selectedItem) {
      return selectedItem.name
    }
    if (selectedCategory === 'referrals') {
      return t('leadboard.topByReferral');
    }
    return t('leadboard.leaderTable');
  }

  const handleBackToList = () => {
    setSelectedItem(null)
  }

  return (
    <div className="flex-1 max-w-2xl mx-auto w-full">
      <div className="flex items-center gap-3 mb-6">
        {selectedItem && (
          <button
            onClick={handleBackToList}
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
        )}
        <div className="flex-1 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Таблица лидеров</h1>
          <p className="text-purple-200">{getTitle()}</p>
        </div>
      </div>

      {/* Категории */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        <button
          onClick={() => {
            setSelectedCategory('campaigns')
            setSelectedItem(null)
          }}
          className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
            selectedCategory === 'campaigns'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white/10 text-purple-200 hover:bg-white/20'
          }`}
        >
          {t('leadboard.tab.company')}
        </button>
        
        <button
          onClick={() => {
            setSelectedCategory('levels')
            setSelectedItem(null)
          }}
          className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
            selectedCategory === 'levels'
              ? 'bg-green-600 text-white shadow-lg'
              : 'bg-white/10 text-purple-200 hover:bg-white/20'
          }`}
        >
          {t('leadboard.tab.levels')}
        </button>
        
        <button
          onClick={() => {
            setSelectedCategory('tournaments')
            setSelectedItem(null)
          }}
          className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
            selectedCategory === 'tournaments'
              ? 'bg-purple-600 text-white shadow-lg'
              : 'bg-white/10 text-purple-200 hover:bg-white/20'
          }`}
        >
          {t('leadboard.tab.tournaments')}
        </button>
        
        <button
          onClick={() => {
            setSelectedCategory('referrals')
            setSelectedItem(null)
          }}
          className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
            selectedCategory === 'referrals'
              ? 'bg-yellow-600 text-white shadow-lg'
              : 'bg-white/10 text-purple-200 hover:bg-white/20'
          }`}
        >
          {t('leadboard.tab.top')}
        </button>
      </div>
      
      {selectedCategory === 'levels' && (
        <div className="space-y-2 mb-4">
          {(levels).map((item: any) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem({ id: item.id, name: item.name })}
              className="group relative overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all cursor-pointer hover:scale-[1.02] rounded-xl"
            >
              <div className="relative p-4 flex items-center gap-3">
                <div className="text-2xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-white font-bold">{item.name}</h3>
                  {item && (
                    <p className="text-purple-200 text-sm capitalize">{item.difficulty}</p>
                  )}
                </div>
                <div className="text-purple-200">›</div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {selectedCategory === 'campaigns' && (
        <div className="space-y-2 mb-4">
          {(campaigns).map((item: any) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem({ id: item.id, name: item.name })}
              className="group relative overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all cursor-pointer hover:scale-[1.02] rounded-xl"
            >
              <div className="relative p-4 flex items-center gap-3">
                <div className="text-2xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-white font-bold">{item.name}</h3>
                </div>
                <div className="text-purple-200">›</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedCategory === 'tournaments' && (
        <div className="space-y-2 mb-4">
          {(tournaments).map((item: any) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem({ id: item.id, name: item.name })}
              className="group relative overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all cursor-pointer hover:scale-[1.02] rounded-xl"
            >
              <div className="relative p-4 flex items-center gap-3">
                <div className="text-2xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-white font-bold">{item.name}</h3>
                </div>
                <div className="text-purple-200">›</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedItem && selectedCategory !== 'referrals' && (
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setLeaderboardType('time')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
              leaderboardType === 'time'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-purple-200 hover:bg-white/20'
            }`}
          >
            <span>⏱</span>
            <span>Speedrun</span>
          </button>
          
          <button
            onClick={() => setLeaderboardType('death')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
              leaderboardType === 'death'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-white/10 text-purple-200 hover:bg-white/20'
            }`}
          >
            <span>💀</span>
            <span>Min deaths</span>
          </button>
        </div>
      )}
      {(selectedCategory === 'referrals') && (
        <div className="space-y-2">
          {referrals.map((player: any, index: number) => {
            const rank = index + 1;
            const rankIcons = ['🥇','🥈','🥉'];
            return(
            <div
              key={player.index}
              className={`relative overflow-hidden border-2 bg-white/10 backdrop-blur-md rounded-xl transition-all ${
                player.isCurrentUser
                  ? 'border-yellow-400/50 bg-yellow-400/10' 
                  : 'border-white/20 hover:bg-white/15'
              }`}
            >
              {rank <= 3 && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent" />
              )}
              <div className="relative p-4 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                  rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                  rank === 2 ? 'bg-gray-300 text-gray-800' :
                  rank === 3 ? 'bg-orange-400 text-orange-900' :
                  'bg-white/20 text-white'
                }`}>
                  {rank <= 3 ? '👤' : rankIcons[rank]}
                </div>
                
                <div className="flex-1">
                  <h3 className={`font-bold ${player.isCurrentUser ? 'text-yellow-300' : 'text-white'}`}>
                    {player.username}
                    {player.isCurrentUser && <span className="ml-2 text-xs">({t('leadboard.you')})</span>}
                  </h3>
                  <p className="text-purple-200 text-sm">{player._count.referrals}</p>
                </div>
                
                {rank <= 3 && (
                  <div className="px-3 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-lg border border-yellow-400/30">
                    <p className="text-yellow-200 font-bold text-xs">{t('leadboard.top3')}</p>
                  </div>
                )}
              </div>
            </div>
          )})}
        </div>
      )}

      {(selectedItem) && (
        <div className="space-y-2">
          {leaderboard.map((player: any, index: number) => {
            const rank = index + 1;
            const rankIcons = ['🥇','🥈','🥉'];
            return (
              <div
                key={rank}
                className={`relative overflow-hidden border-2 bg-white/10 backdrop-blur-md rounded-xl transition-all ${
                  player.isCurrentUser 
                    ? 'border-yellow-400/50 bg-yellow-400/10' 
                    : 'border-white/20 hover:bg-white/15'
                }`}
              >
                {rank <= 3 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-transparent" />
                )}
              
                <div className="relative p-4 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                    rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                    rank === 2 ? 'bg-gray-300 text-gray-800' :
                    rank === 3 ? 'bg-orange-400 text-orange-900' :
                    'bg-white/20 text-white'
                  }`}>
                    {player.rank <= 3 ? player.avatar : rankIcons[rank]}
                  </div>
                
                  <div className="flex-1">
                    <h3 className={`font-bold ${player.isCurrentUser ? 'text-yellow-300' : 'text-white'}`}>
                      {player.user.username}
                      {player.isCurrentUser && <span className="ml-2 text-xs">({t('leadboard.you')})</span>}
                    </h3>
                    <p className="text-purple-200 text-sm">{player.best_time || player.deaths}</p>
                  </div>
                
                  {player.rank <= 3 && (
                    <div className="px-3 py-1 bg-yellow-400/20 backdrop-blur-sm rounded-lg border border-yellow-400/30">
                      <p className="text-yellow-200 font-bold text-xs">{t('leadboard.top3')}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  )
}