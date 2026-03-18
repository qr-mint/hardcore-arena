import { AlertTriangleIcon, ArrowLeftIcon, Calendar1Icon, CheckCircleIcon, ChevronDownIcon, ClockIcon, ExternalLinkIcon, FileTextIcon, GamepadIcon, GiftIcon, HeartIcon, LoaderIcon, LockIcon, PlayIcon, SendIcon, SkullIcon, SparkleIcon, StarIcon, TargetIcon, TicketIcon, TrophyIcon, UserPlusIcon, UsersIcon, XCircleIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { getTournament, getTournamentMyStats, registerTournament } from '@/api/game/tournaments'
import { useAuthStore } from '@/store/auth'

type TournamentType = 'leaderboard' | 'single_attempt' | 'survival'
type TournamentSchedule = 'daily' | 'weekend' | 'special' | 'season'
type TournamentStatus = 'upcoming' | 'ongoing' | 'ended'

interface Prize {
  nft: any,
  network: string,
  percent: number,
  amount: number,
  place_from: number,
  place_to: number,
}

interface Level {
  level_id: number,
  order: number
}

interface User {
  id: number,
  username: string,
}

interface Participant {
  id: number;
  best_time: string;
  deaths: number;
  status: string;
  completed: boolean;
  user: User;
}

interface Taks {
  id: number,
  url: string,
  action: string,
  social: string,
  username: string,
}

interface Tournament {
  id: number
  name: string
  type: TournamentType
  schedule: TournamentSchedule
  status: TournamentStatus
  entry_amount: number;
  entry_tickets: number;
  description: string,
  start_at: string,
  end_at: string,
  players_count: number,
  collection_address: string,
  icon: string,
  color: string,
  network: string,
  currency_token: string,
  address: string,
  token: string,
  balance: number;
  player_limit: number;
  winners_count: number;
  prizes: Prize[],
  levels: Level[],
  participants: Participant[]    
  tasks: Taks[]
}


// =====================
// CONFIGS
// =====================

const typeConfig: Record<TournamentType, { icon: React.FC<{ className?: string }>; label: string; color: string }> = {
  leaderboard: { icon: TrophyIcon, label: 'Leaderboard', color: 'text-yellow-400' },
  single_attempt: { icon: TargetIcon, label: 'Single Attempt', color: 'text-red-400' },
  survival: { icon: HeartIcon, label: 'Survival', color: 'text-pink-400' },
}

const scheduleConfig: Record<TournamentSchedule, { label: string; bgColor: string; textColor: string }> = {
  daily: { label: 'Daily', bgColor: 'bg-blue-500/20', textColor: 'text-blue-400' },
  weekend: { label: 'Weekend', bgColor: 'bg-purple-500/20', textColor: 'text-purple-400' },
  special: { label: 'Special Event', bgColor: 'bg-amber-500/20', textColor: 'text-amber-400' },
  season: { label: 'Season', bgColor: 'bg-emerald-500/20', textColor: 'text-emerald-400' },
}

const platformConfig: Record<string, { icon: React.FC<{ className?: string }>; label: string; color: string }> = {
  telegram: { icon: SendIcon, label: 'Telegram', color: 'text-sky-400' },
  // twitter: { icon: TwitterIcon, label: 'X (Twitter)', color: 'text-white' },
  // discord: { icon: DiscordIcon, label: 'Discord', color: 'text-indigo-400' },
  // youtube: { icon: YoutubeIcon, label: 'YouTube', color: 'text-red-500' },
  // instagram: { icon: InstagramIcon, label: 'Instagram', color: 'text-pink-500' },
}

// Helper to format time
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export function Tournament() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const { user } = useAuthStore();
  const [myStats, setMyStats] = useState<Participant>();
  const [tournament, setTournament] = useState<Tournament>();
  const [isVerifying, setIsVerifying] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const loadMyTournament = async () => {
      try {
        const data = await getTournament(params.id);
        setTournament(data);
        const stats = await getTournamentMyStats(params.id);
        setMyStats(stats);
      } catch (err) {
        toast.error((err as any).message);
      }
    }
    if (!tournament) {
      loadMyTournament();
    }
  }, []);

  // Timer effect
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      let targetTime: Date

      if (tournament?.status === 'upcoming') {
        targetTime = new Date(tournament.start_at)
      } else if (tournament?.status === 'ongoing' && tournament.end_at) {
        targetTime = new Date(tournament.end_at)
      } else {
        return ''
      }

      const diff = targetTime.getTime() - now.getTime()
      if (diff <= 0) return '00:00:00'

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      if (days > 0) {
        return `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      }
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    }

    setTimeLeft(calculateTimeLeft())
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [tournament])

  const handleVerifySocials = async () => {
    
  }

  const handlePayFee = async () => {
    setIsPaying(true);
    try {
      await registerTournament(body);
    } catch (err) {
      toast.error((err as any).message);
    } finally {
      setIsPaying(false);
    }
  }

  const handleRegister = async (body: any) => {
    setIsRegistering(true);
    try {
      await registerTournament(body);
    } catch (err) {
      toast.error((err as any).message);
    } finally {
      setIsRegistering(false);
    }
  }

  const handlePlaySurvival = () => {
    // In real app, this would start survival mode
    alert('Starting Survival mode...');
  }

  const handlePlaySingleAttempt = () => {
    // In real app, this would start single attempt
    alert('Starting Single Attempt...');
  }

  const handleGoBack = () => {
    navigate("/");
  };

  if (!tournament) {
    return <></>;
  }

  const typeInfo = typeConfig[tournament.type]
  const scheduleInfo = scheduleConfig[tournament.schedule]
  const TypeIcon = typeInfo.icon

  const hasSocials = false;
  const hasEntryFee = (tournament.entry_amount && tournament.entry_amount > 0 || tournament.entry_tickets && tournament.entry_tickets > 0);
  const socialsOk = false;
  const feeOk = false;
  const canRegister = false;
  const isRegistered = false;

  const hasMoneyPrize = tournament?.balance > 0
  const hasNFTs = tournament.prizes.some((prize) => prize.nft !== null);

  const maxDescriptionLength = 150
  const isLongDescription = tournament.description.length > maxDescriptionLength
  const displayDescription = isDescriptionExpanded || !isLongDescription
    ? tournament.description
    : tournament.description.slice(0, maxDescriptionLength) + '...'

  // Status config
  const statusConfig = {
    upcoming: { icon: ClockIcon, label: 'Starts in', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-500/30', textColor: 'text-blue-400' },
    ongoing: { icon: PlayIcon, label: 'Ends in', bgColor: 'bg-green-500/20', borderColor: 'border-green-500/30', textColor: 'text-green-400' },
    completed: { icon: CheckCircleIcon, label: 'Tournament ended', bgColor: 'bg-gray-500/20', borderColor: 'border-gray-500/30', textColor: 'text-gray-400' },
  }
  const currentStatusConfig = statusConfig[tournament.status];
  const StatusIcon = currentStatusConfig.icon

  // Game state checks
  const completedLevels = tournament.levels?.filter(l => l.completed).length ?? 0;
  const allLevelsCompleted = completedLevels === (tournament.levels.length ?? 0);

  const renderRegister = () => {
    if (tournament.entry_amount > 0 || tournament.entry_tickets) {
      return (
        <div className="flex flex-col gap-3 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/70">Entry Fee</span>
            <span className="text-sm font-medium text-amber-400">
              {tournament?.entry_amount > 0 ? `${tournament?.entry_amount} ${tournament?.token}` : `${tournament?.entry_tickets} tickets`}
            </span>
          </div>  
          <button
            onClick={handlePayFee}
            disabled={isPaying || !socialsOk}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-50 transition-colors text-white font-medium"
          >
            {isPaying ? (
              <>
                <LoaderIcon className="w-4 h-4" />
                Processing...
              </>
            ) : (
              'Pay Entry Fee'
            )}
          </button>          
        </div>
      ) 
    }
    return (
      <div className="pt-3 border-t border-white/10">
        <button
          onClick={handleRegister}
          disabled={isRegistering || !canRegister}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white font-semibold"
        >
          {isRegistering ? (
            <>
              <LoaderIcon className="w-4 h-4" />
                Registering...
            </>
          ) : (
            <>
              <UserPlusIcon className="w-4 h-4" />
              Register
            </>
          )}
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handleGoBack}
            className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl font-bold text-white truncate">{tournament?.name}</h1>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
            <TypeIcon className={`w-4 h-4 ${typeInfo.color}`} />
            <span className="text-sm text-white/90">{typeInfo.label}</span>
          </div>

          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${scheduleInfo.bgColor}`}>
            {tournament?.schedule === 'special' && <SparkleIcon className="w-4 h-4 text-amber-400" />}
            {tournament?.schedule === 'season' && <StarIcon className="w-4 h-4 text-emerald-400" />}
            {tournament?.schedule === 'daily' && <Calendar1Icon className="w-4 h-4 text-blue-400" />}
            {tournament?.schedule === 'weekend' && <Calendar1Icon className="w-4 h-4 text-purple-400" />}
            <span className={`text-sm ${scheduleInfo.textColor}`}>{scheduleInfo.label}</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
            <UsersIcon className="w-4 h-4 text-white/70" />
            <span className="text-sm text-white/90">
              {tournament?.players_count}
              {tournament?.player_limit && `/${tournament?.player_limit}`}
            </span>
          </div>

              
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <ExternalLinkIcon className="w-4 h-4 text-white/70" />
            <span className="text-sm text-white/90">Rules</span>
          </a>
        </div>
      </div>

          {/* ===== STATUS & TIMER ===== */}
      <div className={`rounded-2xl ${currentStatusConfig.bgColor} border ${currentStatusConfig.borderColor} p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StatusIcon className={`w-5 h-5 ${currentStatusConfig.textColor}`} />
            <span className={`font-medium ${currentStatusConfig.textColor}`}>{currentStatusConfig.label}</span>
          </div>
          {tournament?.status !== 'completed' && timeLeft && (
            <div className="font-mono text-xl font-bold text-white">{timeLeft}</div>
          )}
        </div>
      </div>

          {/* ===== TYPE-SPECIFIC WARNINGS ===== */}
      {tournament?.type === 'single_attempt' && isRegistered && (
        <div className="rounded-2xl bg-red-500/20 border border-red-500/30 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-400">Single Attempt Only</h3>
              <p className="text-sm text-white/70 mt-1">
                You have only ONE chance to complete this tournament. If you lose, you cannot retry!
              </p>
            </div>
          </div>
        </div>
      )}

      {tournament?.type === 'single_attempt' && (
        <div className="rounded-2xl bg-red-500/20 border border-red-500/30 p-4">
          <div className="flex items-start gap-3">
            <SkullIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-400">Eliminated</h3>
              <p className="text-sm text-white/70 mt-1">
                You have been eliminated from this tournament. Better luck next time!
              </p>
            </div>
          </div>
        </div>
      )}

      {tournament?.type === 'survival' && isRegistered && (
        <div className="rounded-2xl bg-pink-500/20 border border-pink-500/30 p-4">
          <div className="flex items-start gap-3">
            <HeartIcon className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-pink-400">Survival Mode</h3>
              <p className="text-sm text-white/70 mt-1">
                Survive as long as possible! There is no finish line. The longer you survive, the higher your score.
              </p>
              {myStats?.best_time && (
                <p className="text-sm text-pink-400 mt-2">
                  Your best time: {formatTime(myStats.best_time)}
                </p>
              )}
              </div>
            </div>
          </div>
        )}

        {(hasMoneyPrize || hasNFTs) && (
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4">
            <div className="flex items-center gap-2 mb-4">
              <GiftIcon className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-semibold text-white">Prize Pool</h2>
            </div>

            <div className="flex flex-col gap-4">
              {hasMoneyPrize && (
                <div className="flex items-center justify-center py-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
                  <span className="text-3xl font-bold text-amber-400">
                    {tournament?.balance} {tournament?.token}
                  </span>
                </div>
              )}

              {/* {hasNFTs && (
                <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
                  {tournament?.prizes?.map((prize) => {
                      const rarity = nft.rarity || 'common'
                      return (
                        <div key={nft.id} className={`flex-shrink-0 w-28 rounded-xl border-2 ${rarityColors[rarity]} overflow-hidden`}>
                          <div className="aspect-square bg-white/5 flex items-center justify-center">
                            <img src={nft.image} alt={nft.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-2">
                            <p className="text-xs text-white/90 truncate font-medium">{nft.name}</p>
                            {nft.rarity && (
                              <p className={`text-[10px] capitalize ${rarityTextColors[rarity]}`}>{nft.rarity}</p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
              )} */}
            </div>
          </div>
        )}

          {/* ===== DESCRIPTION ===== */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <FileTextIcon className="w-5 h-5 text-white/70" />
            <h2 className="text-lg font-semibold text-white">Description</h2>
          </div>

          <p className="text-sm text-white/80 leading-relaxed whitespace-pre-line">{displayDescription}</p>

          {isLongDescription && (
            <button
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="flex items-center gap-1 mt-3 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              {isDescriptionExpanded ? (
                <>
                  <ChevronDownIcon className="w-4 h-4" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDownIcon className="w-4 h-4" />
                  Show more
                </>
              )}
            </button>
          )}
        </div>

          {/* ===== LEADERBOARD PREVIEW (for leaderboard type) ===== */}
        {tournament?.type === 'leaderboard' && (
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrophyIcon className="w-5 h-5 text-yellow-400" />
                <h2 className="text-lg font-semibold text-white">Leaderboard</h2>
              </div>
              <button
                onClick={() => navigate(`/tournaments/${tournament.id}/participants`)}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                View All
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {tournament.participants.slice(0, 3).map((participant) => {
                const isCurrentUser = participant.id === myStats.id;
                return (
                  <div
                    key={participant.id}
                    className={`flex items-center gap-3 p-3 rounded-xl ${
                      isCurrentUser ? 'bg-purple-500/20 border border-purple-500/30' : 'bg-white/5'
                    }`}
                  >
                    {/* <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                      entry.rank === 1 ? 'bg-yellow-500/30 text-yellow-400' :
                      entry.rank === 2 ? 'bg-gray-400/30 text-gray-300' :
                      entry.rank === 3 ? 'bg-amber-600/30 text-amber-500' :
                      'bg-white/10 text-white/60'
                    }`}>
                      {entry.rank}
                    </div> */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-medium">
                      {participant.user.username.charAt(0).toUpperCase()}
                    </div>
                    <span className={`flex-1 text-sm font-medium truncate ${isCurrentUser ? 'text-purple-300' : 'text-white'}`}>
                      {participant.user.username}
                      {isCurrentUser && <span className="text-purple-400 ml-1">(You)</span>}
                    </span>
                    <span className="text-sm font-bold text-amber-400">{participant.best_time}</span>
                  </div>
                );
              })}

                {tournament?.participants.find((participant, index) => participant.id === myStats?.id && (index + 1) > 3) && (
                  <>
                    <div className="flex items-center justify-center py-1">
                      <span className="text-white/30 text-xs">...</span>
                    </div>
                    {(() => {
                      const currentUser = tournament.participants.find(participant => participant.id === myStats?.id)!
                      return (
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                          {/* <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm bg-white/10 text-white/60">
                            {currentUser}
                          </div> */}
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-medium">
                            {currentUser.user.username.charAt(0).toUpperCase()}
                          </div>
                          <span className="flex-1 text-sm font-medium truncate text-purple-300">
                            {currentUser.user.username}
                            <span className="text-purple-400 ml-1">(You)</span>
                          </span>
                          {/* <span className="text-sm font-bold text-amber-400">{currentUser.score.toLocaleString()}</span> */}
                        </div>
                      )
                    })()}
                  </>
                )}
          </div>

          <button
            onClick={() => navigate(`/tournaments/${tournament.id}/participants`)}
            className="w-full mt-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white/70 text-sm font-medium"
          >
            See Full Leaderboard
          </button>
        </div>
      )}

          {/* ===== ENTRY REQUIREMENTS ===== */}
      {tournament?.status !== 'ended' && !isRegistered && (
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4">
          <div className="flex items-center gap-2 mb-4">
            <TicketIcon className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-semibold text-white">Entry Requirements</h2>
          </div>

          <div className="flex flex-col gap-4">
            {/* Social Requirements */}
            {hasSocials && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Subscribe to socials</span>
                      {/* {tournament.requirements.socialsVerified !== undefined && (
                        tournament.requirements.socialsVerified ? (
                          <CheckCircleIcon className="w-5 h-5 text-green-400" />
                        ) : (
                          <XCircleIcon className="w-5 h-5 text-red-400" />
                        )
                      )} */}
                </div>

                <div className="flex flex-col gap-2">
                  {tournament?.tasks?.map((social, index) => {
                    const config = platformConfig[social.platform]
                    const Icon = config.icon
                    const displayName = social.username;

                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${config.color} bg-white/10`}>
                          <Icon className="w-4 h-4" />
                        </div>
                          <span className="flex-1 text-sm text-white/90">{displayName}</span>
                          <span className="text-xs text-white/40">Subscribe</span>
                        </a>
                      )
                    })}
                </div>

                    {/* {!tournament.requirements.socialsVerified && (
                      <button
                        onClick={handleVerifySocials}
                        disabled={isVerifying}
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 transition-colors text-white font-medium"
                      >
                        {isVerifying ? (
                          <>
                            <LoaderIcon className="w-4 h-4" />
                            Verifying...
                          </>
                        ) : (
                          'Verify Subscriptions'
                        )}
                      </button>
                    )} */}
              </div>
            )}


            {renderRegister()}
          </div>
        </div>
      )}

          {/* ===== PLAY SECTION (after registration) ===== */}
      {isRegistered && tournament?.status === 'ongoing' && (
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4">
          <div className="flex items-center gap-2 mb-4">
            <GamepadIcon className="w-5 h-5 text-green-400" />
            <h2 className="text-lg font-semibold text-white">Play</h2>
          </div>

              {/* Leaderboard type - Show levels progress and play button */}
          {tournament?.type === 'leaderboard' && (
            <div className="flex flex-col gap-4">
                  {/* Progress */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <span className="text-sm text-white/70">Progress</span>
                <span className="text-sm font-medium text-white">
                {completedLevels}/{tournament.levels.length} levels
              </span>
            </div>

                  {/* Your result if completed */}
            {allLevelsCompleted && myStats.best_time && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-green-500/20 border border-green-500/30">
                <span className="text-sm text-green-400">Your Total Time</span>
                <span className="text-sm font-bold text-green-400">{formatTime(myStats.best_time)}</span>
              </div>
            )}

                  {/* Play / Select Level button */}
            {!allLevelsCompleted && (
              <button
                onClick={() => navigate(`/tournaments/${tournament.id}/levels`)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all text-white font-semibold"
              >
                <PlayIcon className="w-5 h-5" />
                Select Level
              </button>
            )}

            {allLevelsCompleted && (
              <div className="text-center py-3 text-green-400">
                <CheckCircleIcon className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm">All levels completed!</span>
              </div>
            )}
          </div>
        )}

              {/* Survival type - Direct play button */}
        {tournament?.type === 'survival' && (
          <div className="flex flex-col gap-4">
            {myStats?.best_time && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-pink-500/20 border border-pink-500/30">
                <span className="text-sm text-pink-400">Best Survival Time</span>
                <span className="text-sm font-bold text-pink-400">{formatTime(myStats?.best_time)}</span>
              </div>
            )}

            <button
              onClick={handlePlaySurvival}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 transition-all text-white font-semibold"
                  >
                  <PlayIcon className="w-5 h-5" />
                {/* {myStats?.hasPlayed ? 'Play Again' : 'Start Survival'} */}
            </button>
          </div>
        )}

              {/* Single Attempt type - One time play */}
        {tournament?.type === 'single_attempt' && (
          <div className="flex flex-col gap-4">
            {!myStats?.completed ? (
              <button
                onClick={handlePlaySingleAttempt}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 transition-all text-white font-semibold"
              >
                <PlayIcon className="w-5 h-5" />
                Start (1 Attempt)
              </button>
            ) : (
              <div className="text-center py-3 text-white/60">
                <span className="text-sm">You have already used your attempt</span>
              </div>
            )}
            </div>
          )}
        </div>
      )}

          {/* ===== REGISTERED STATUS (for upcoming) ===== */}
      {isRegistered && tournament?.status === 'upcoming' && (
        <div className="rounded-2xl bg-green-500/20 border border-green-500/30 p-4">
          <div className="flex items-center justify-center gap-2 text-green-400">
            <CheckCircleIcon className="w-5 h-5" />
            <span className="font-medium">You are registered!</span>
          </div>
          <p className="text-sm text-white/60 text-center mt-2">
            Come back when the tournament starts to play.
          </p>
        </div>
      )}
    </div>
  );
}
