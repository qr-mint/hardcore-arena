import { useEffect, useState } from "react";
import { ArrowLeftIcon, CheckCircleIcon, LockIcon, PlayIcon } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

import { getTournament, getTournamentMyStats, getLevels } from "@/api/game/tournaments";

export const Levels = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [myStats, setMyStats] = useState();
  const [tournament, setTournament] = useState();
  useEffect(() => {
    const loadMyTournament = async () => {
      try {
        const data = await getTournament(params.id);
        setTournament(data);
        const stats = await getLevels(params.id as any);
        setMyStats(stats);
      } catch (err) {
        toast.error((err as any).message);
      }
    }
    if (!tournament) {
      loadMyTournament();
    }
  }, []);
  const handleGoBack = () => {
    navigate(`/tournaments/${params.id}`);
  };
  return (
    <div>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handleGoBack}
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          {/* <div>
            <h1 className="text-xl font-bold text-white">Select Level</h1>
            <p className="text-sm text-white/60">{completedLevels}/{tournament.levels.length} completed</p>
          </div> */}
        </div>

            {/* User Stats */}
        {myStats?.best_time && (
          <div className="rounded-xl bg-purple-500/20 border border-purple-500/30 p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">Your Total Time</span>
              <span className="text-lg font-bold text-purple-400">{formatTime(myStats?.best_time)}</span>
            </div>
          </div>
        )}

            {/* Levels Grid */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-4">
            <div className="grid grid-cols-2 gap-3">
              {tournament.levels?.map((level: any) => {
                const isCompleted = level.completed
                const isLocked = level.locked
                const canPlay = !isCompleted && !isLocked

                return (
                  <button
                    key={level.id}
                    onClick={() => canPlay && handlePlayLevel(level.id)}
                    disabled={!canPlay}
                    className={`relative p-4 rounded-xl border transition-all ${
                      isCompleted
                        ? 'bg-green-500/20 border-green-500/30 cursor-default'
                        : isLocked
                        ? 'bg-white/5 border-white/10 opacity-50 cursor-not-allowed'
                        : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-purple-500/50'
                    }`}
                    >
                      {/* Level Number */}
                    <div className={`text-2xl font-bold mb-2 ${
                      isCompleted ? 'text-green-400' : isLocked ? 'text-white/30' : 'text-white'
                    }`}>
                      {level.id}
                    </div>

                    <p className={`text-sm ${
                      isCompleted ? 'text-green-400/80' : isLocked ? 'text-white/30' : 'text-white/70'
                    }`}>
                      {level.name}
                    </p>

                      {/* Status */}
                    {isCompleted && level.bestTime && (
                      <div className="mt-2 flex items-center gap-1 text-xs text-green-400">
                        <CheckCircleIcon className="w-3.5 h-3.5" />
                        <span>{formatTime(level.bestTime)}</span>
                      </div>
                    )}

                    {isLocked && (
                      <div className="absolute top-2 right-2">
                        <LockIcon className="w-4 h-4 text-white/30" />
                      </div>
                    )}

                    {canPlay && (
                      <div className="mt-2 flex items-center gap-1 text-xs text-purple-400">
                        <PlayIcon className="w-3.5 h-3.5" />
                        <span>Play</span>
                      </div>
                    )}
                  </button>
                )
            })}
          </div>
        </div>

            {/* All Completed Message */}
        {/* {allLevelsCompleted && (
          <div className="rounded-xl bg-green-500/20 border border-green-500/30 p-4 text-center">
            <CheckCircleIcon className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-green-400 font-semibold">All Levels Completed!</p>
            <p className="text-sm text-white/60 mt-1">Total Time: {formatTime(myStats?.best_time ?? 0)}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};