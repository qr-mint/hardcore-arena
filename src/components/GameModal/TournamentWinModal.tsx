
import { Modal } from "../modal"
import { X, Crown, Clock, Gift, Star } from "lucide-react"

interface ModalProps {
  onClose: () => void;
  data: any,
  onBackMenu: () => void;
  t: (key: string, options?: any) => string;
};

const statusLabels: Record<string, string> = {
  pending: "pending",
  claimed: "claimed",
  delayed: "delayed",
}

export function TournamentWinModal({ onClose, data, onBackMenu, t }: ModalProps) {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="bg-white/95 backdrop-blur-xl border-2 border-purple-300 shadow-2xl rounded-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <Crown className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-purple-900">{t('gameModal.tournamentWin.title')}</h2>
                <span className="text-xs font-semibold text-amber-600 flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {t('gameModal.tournamentWin.place', {place: 1})}
                </span>
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

          {/* Win message */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-5">
            <p className="text-sm text-green-700">{data.your_win_text}</p>
          </div>

          {/* Time stat */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 mb-4 flex items-center gap-3">
            <Clock className="w-4 h-4 text-purple-500" />
            <div>
              <p className="text-xs text-purple-400">{t('gameModal.tournamentWin.winningTime')}</p>
              <p className="text-sm font-bold text-purple-900 font-mono">{data.current_time}</p>
            </div>
          </div>

          {/* Reward */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-amber-700">{data.reward}</p>
                <p className="text-xs text-amber-500">{t(`gameModal.tournamentWin.statuses.${statusLabels[data.reward_status]}`)}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <button
            onClick={onBackMenu}
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-colors text-sm tracking-wide active:scale-[0.98]"
          >
            {t('gameModal.tournamentWin.buttons.mainMenu')}
          </button>
        </div>
      </div>
    </Modal>
  )
}
