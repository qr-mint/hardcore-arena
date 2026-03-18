import { getTournament } from "@/api/game/tournaments";
import { ArrowLeft, Coins, Crown, Play, Sparkles, Trophy, Users, Wallet, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import * as date from '../../../utils/date';
import { getLeaderboardByTourname } from '@/api/game/leadboard';

export const MyTournament = () => {
  const { t } = useTranslation();
  const [tournament, setTournament] = useState<any>();
  const [list, setList] = useState<any[]>([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadMyTournament = async () => {
      try {
        const data = await getTournament(params.id);
        setTournament(data);
        const list = await getLeaderboardByTourname(params.id as any, 'time');
        setList(list);
      } catch (err) {
        toast.error((err as any).message);
      }
    }
    if (!tournament) {
      loadMyTournament();
    }
  }, []);

  const handleCopyContract = async () => {
    try {
     //
    } catch (err) {
      toast.error((err as any).message);
    }
  };

  if (!tournament) {
    return <></>
  }
  
  return (
    <div className="flex-1 max-w-2xl mx-auto w-full pb-24">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">{tournament.name}</h1>
            <p className="text-purple-200 text-sm">
              {date.onlyDate(tournament.start_at)} - {date.onlyDate(tournament.end_at)} | {tournament.status}
            </p>
          </div>
        </div>

        {/* Pool card */}
        <div className={`bg-gradient-to-r ${tournament.gradient} rounded-2xl p-5 mb-4 border-2 border-white/20`}>
          <p className="text-white/70 text-sm mb-1">Призовой пул</p>
          <div className="flex items-end gap-2 mb-3">
            <span className="text-4xl font-bold text-white">{tournament.balance}</span>
            <span className="text-xl text-white/80 mb-1">{tournament.token}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {/* {selected.nftPrizes > 0 && (
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-sm font-semibold">{selected.nftPrizes} NFT</span>
              </div>
            )} */}
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
              <Zap className="w-4 h-4 text-blue-300" />
              <span className="text-white text-sm font-semibold">{tournament.timeLeft}</span>
            </div>
          </div>
        </div>

        

        {/* Smart Contract Address */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-white font-semibold text-sm">Смарт-контракт</p>
            <span className="text-purple-300 text-xs">Пополнение призов</span>
          </div>
          <div
            onClick={handleCopyContract}
            className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 cursor-pointer hover:bg-white/10 transition-all group"
          >
            <Wallet className="w-4 h-4 text-purple-300 flex-shrink-0" />
            <span className="text-purple-200 font-mono text-xs truncate flex-1">{tournament.address}</span>
            <span className="text-purple-400 text-xs font-semibold flex-shrink-0 group-hover:text-white transition-colors">
              {/* {copiedContract ? "Скопировано!" : "Копировать"} */}
            </span>
          </div>
          <p className="text-purple-400 text-xs mt-2">Отправьте TON на этот адрес чтобы пополнить призовой пул</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <button className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-3 text-center">
            <Users className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-3 text-center hover:bg-white/15 transition-all" />
            <p className="text-xl font-bold text-white">{tournament.players_count}/{tournament.player_limit}</p>
            <p className="text-purple-300 text-xs">Игроков</p>
          </button>
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-3 text-center">
            <Trophy className="w-5 h-5 text-yellow-300 mx-auto mb-1" />
            <p className="text-xl font-bold text-white">{tournament.winners_count}</p>
            <p className="text-purple-300 text-xs">Победителей</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-3 text-center">
            <Crown className="w-5 h-5 text-yellow-300 mx-auto mb-1" />
            <p className="text-sm font-bold text-white">{list[0]?.name}</p>
            <p className="text-purple-300 text-xs">Лидер</p>
          </div>
        </div>

        {/* Action buttons based on status */}
        <div className="space-y-3">
          {tournament.status === "created" && (
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Опубликовать турнир
            </button>
          )}

        {tournament.status === "upcoming" && (
          <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Запустить турнир
            </button>
        )}

        {tournament.status === "completed" && (
          <>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              <Coins className="w-5 h-5" />
              Раздать призы (TON)
            </button>
            <div className="bg-yellow-400/10 backdrop-blur-md rounded-xl border border-yellow-400/30 p-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-sm">NFT призы</p>
                  <p className="text-purple-300 text-xs mt-1">NFT призы необходимо раздать вручную победителям через TON кошелек</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
