import { getLevels } from "@/api/game/levels";
import { ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function LevelSelectPage({ onBack, t }: { onBack: () => void, t: (any: string) => string }) {
  const [levels, setLevels] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const loadLevels = async () => {
      try {
        const levels = await getLevels();
        setLevels(levels);
      } catch (err) {
        toast.error((err as any).message);
      }
    };
    loadLevels();
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'from-green-400 to-green-600'
      case 'medium': return 'from-yellow-400 to-yellow-600'
      case 'hard': return 'from-orange-400 to-red-600'
      case 'expert': return 'from-purple-500 to-pink-600'
      default: return 'from-gray-400 to-gray-600'
    }
  }

  const getDifficultyBorder = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'border-green-400'
      case 'medium': return 'border-yellow-400'
      case 'hard': return 'border-orange-500'
      case 'expert': return 'border-purple-500'
      default: return 'border-gray-400'
    }
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '🟢'
      case 'medium': return '🟡'
      case 'hard': return '🔴'
      case 'expert': return '💀'
      default: return '⚪'
    }
  }

  useEffect(() => {
  
  }, []);

  const handleSelect = (level: any) => {
    navigate(`/game?level_id=${level.id}`);
  };
  if (!levels) {
      return;
  }
  return (
    <div className="flex-1 max-w-2xl mx-auto w-full">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{t('levelSelect.title')}</h1>
          <p className="text-purple-200">{t('levelSelect.subtitle')}</p>
        </div>
      </div>

      <div className="space-y-3">
        {levels.map((level: any) => (
          <div
            key={level.id}
            className={`group relative overflow-hidden border-2 bg-white/10 backdrop-blur-md rounded-xl transition-all ${
              level.locked 
                ? 'border-white/10 opacity-50 cursor-not-allowed' 
                : `${getDifficultyBorder(level.difficulty)} hover:bg-white/15 cursor-pointer hover:scale-[1.02]`
            }`}
            onClick={() => handleSelect(level)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${getDifficultyColor(level.difficulty)} ${
              level.locked ? 'opacity-10' : 'opacity-30 group-hover:opacity-40'
            } transition-opacity`} />
            
            <div className="relative p-4">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0 ${
                  level.locked 
                    ? 'bg-white/10 text-gray-400' 
                    : 'bg-white/20 text-white'
                }`}>
                  {level.locked ? '🔒' : level.id}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">{level.name}</h3>
                    {level.completed && (
                      <span className="text-green-400">✓</span>
                    )}
                  </div>
                  {/* <p className="text-purple-200 text-sm mb-2">Автор: {level.author}</p> */}
                  
                  <div className="flex items-center gap-2">
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
                      level.locked ? 'bg-white/5 text-gray-400' : 'bg-white/20 text-white'
                    }`}>
                      <span>{getDifficultyIcon(level.difficulty)}</span>
                      <span>{level.difficulty_label}</span>
                    </div>
                    
                    {/* {level.completed && level.stars > 0 && (
                      <div className="flex items-center gap-0.5">
                        {[...Array(3)].map((_, i) => (
                          <span key={i} className={i < level.stars ? 'text-yellow-400' : 'text-gray-500'}>
                            ⭐
                          </span>
                        ))}
                      </div>
                    )} */}
                  </div>
                </div>
              </div>

              {level.user_levels[0]?.best_time && (
                <div className="mt-3 pt-3 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-200">{t('levelSelect.bestTime')}:</span>
                    <span className="text-white font-bold">{level.user_levels[0].best_time}</span>
                  </div>
                </div>
              )}

              {level.locked && (
                <div className="absolute top-3 right-3 bg-purple-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-purple-500/50">
                  <p className="text-purple-200 text-xs font-semibold">{t('levelSelect.locked')}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
