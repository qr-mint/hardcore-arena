import { Clock, X, Swords, Hash, Timer, Calendar1Icon } from 'lucide-react';

import { Modal } from '../modal';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { useOrderStatusPolling } from '@/hooks/useOrderStatusPolling';
import { useNavigate } from 'react-router-dom';

interface ModalProps {
  onClose: () => void;
  data: any,
  onBackMenu: () => void;
  t: (key: string) => string;
};

export const TournamentLoseModal = ({ onClose, data, onBackMenu, t }: ModalProps) => {
  const navigate = useNavigate();
  const [order, setOrder] = useState<any>({});
  const connectors = useContext<ConnectContext>();

  const handleOrderConfirmed = async () => {
    try {
      setOrder({});
      navigate(`/game?tourname_id=${data.tournament_id}&order_id=${order.id}`);
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

  const handlePlayAgain = async () => {
    const tournameId = data.tournament_id;
    if (data.tournament_id) {
      if (!connectors.ton.connected) {
        await connectors.ton.connect();
        return;
      }
      try {
        const paymentResponse = await connectors.ton.sendTransaction({
          token: 'ton',
          type: 'join_jackpot',
          network: 'ton',
          tournament_id: data.tournament_id,
        });
          
        setOrder({
          id: paymentResponse.gameTransaction.id,
          tournament_id: tournameId,
        });
      } catch (err) {
        toast.error((err as any).message);
      }
    }
  };

  return (
     <Modal isOpen={true} onClose={onClose}>
      <div className="bg-white/95 backdrop-blur-xl border-2 border-purple-300 shadow-2xl rounded-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <Swords className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-purple-900">{t('gameModal.tournamentLose.title')}</h2>
                <span className="text-xs text-purple-400">{t('gameModal.tournamentLose.subtitle')}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-purple-700" />
            </button>
          </div>

          {/* Message */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
            <p className="text-sm text-red-700">{data.your_lost_text}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
              <Clock className="w-4 h-4 text-purple-500 mx-auto mb-1.5" />
              <p className="text-xs text-purple-400 mb-0.5">{t('gameModal.tournamentLose.yourTime')}</p>
              <p className="text-sm font-bold text-purple-900 font-mono">{data.current_time}</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
              <Hash className="w-4 h-4 text-purple-500 mx-auto mb-1.5" />
              <p className="text-xs text-purple-400 mb-0.5">{t('gameModal.tournamentLose.position')}</p>
              <p className="text-sm font-bold text-purple-900 font-mono">#{data.position}</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
              <Timer className="w-4 h-4 text-purple-500 mx-auto mb-1.5" />
              <p className="text-xs text-purple-400 mb-0.5">{t('gameModal.tournamentLose.best')}</p>
              <p className="text-sm font-bold text-purple-900 font-mono">{data.best_tournament_time}</p>
            </div>
          </div>

          {/* Next tournament */}
          {data.next_tournament_at && (
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 mb-5 flex items-center gap-3">
              <Calendar1Icon className="w-4 h-4 text-purple-500" />
              <div>
                <p className="text-xs text-purple-400">{t('gameModal.tournamentLose.nextTournament')}</p>
                <p className="text-sm font-bold text-purple-900 font-mono">{data.next_tournament_at}</p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-2.5">
            <button
              onClick={handlePlayAgain}
              className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-colors text-sm tracking-wide active:scale-[0.98]"
            >
              {t('gameModal.tournamentLose.playAgain')}
            </button>
            <button
              onClick={onBackMenu}
              className="w-full py-2.5 px-4 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium rounded-xl transition-colors text-sm active:scale-[0.98]"
            >
              {t('gameModal.tournamentLose.mainMenu')}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
