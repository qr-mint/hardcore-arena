import {
  Check,
} from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { getLevels } from "@/api/game/levels"

function getDiffColor(d: string) {
  switch (d) {
    case "easy": return "text-green-400 bg-green-400/20 border-green-400/30"
    case "medium": return "text-yellow-400 bg-yellow-400/20 border-yellow-400/30"
    case "hard": return "text-red-400 bg-red-400/20 border-red-400/30"
    case "expert": return "text-purple-400 bg-purple-400/20 border-purple-400/30"
    default: return "text-gray-400 bg-gray-400/20 border-gray-400/30"
  }
}

function getDiffLabel(d: string) {
  switch (d) {
    case "easy": return "Легкий"
    case "medium": return "Средний"
    case "hard": return "Сложный"
    case "expert": return "Эксперт"
    default: return d
  }
}

interface LevelFormProps {
  t: (e: string) => string;
  watchAll: any;
  setValue: any;
  getValues: any;
}

export const LevelForm = ({  t, watchAll, setValue, getValues }: LevelFormProps) => {
  const [levels, setLevels] = useState<any[]>();
    useEffect(() => {
      const loadLevels = async () => {
        try {
          const levels = await getLevels();
          setLevels(levels);
        } catch (err) {
          toast.error((err as any).message);
        }
      };
      if (!levels) {
        loadLevels();
      }
    }, []);

    const selectedLevels = watchAll.selected_levels
    const toggleLevel = (level: any) => {
      const current = getValues("selected_levels");
      if (current.some((l: any) => l.id === level.id)) {
        setValue("selected_levels", current.filter((l: any) => l.id !== level.id))
      } else {
        setValue("selected_levels", [...current, { id: level.id }])
      }
    }
  
  
  return (
    <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <label className="text-white font-semibold">Выберите уровни</label>
              <span className="text-purple-300 text-sm">{selectedLevels.length} выбрано</span>
            </div>
            <p className="text-purple-300 text-xs mb-4">Выберите один или несколько уровней для этого турнира</p>

            <div className="flex gap-2 mb-4 flex-wrap">
              <button
                type="button"
                onClick={() => setValue("selected_levels", levels?.map((l) => l.id))}
                className="px-3 py-1.5 rounded-lg bg-purple-600/50 text-white text-xs font-semibold hover:bg-purple-600 transition-all"
              >
                Выбрать все
              </button>
              <button
                type="button"
                onClick={() => setValue("selected_levels", [])}
                className="px-3 py-1.5 rounded-lg bg-white/10 text-purple-200 text-xs font-semibold hover:bg-white/20 transition-all"
              >
                Сбросить
              </button>
              {["easy", "medium", "hard", "expert"].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => {
                    const ids = levels?.filter((l) => l.difficulty === d).map((l) => ({ id: l.id }));
                    const current = getValues("selected_levels")
                    const allSelected = ids.every((id) => current.includes(id))
                    if (allSelected) {
                      setValue("selected_levels", current.filter((id: any) => !ids.includes(id)))
                    } else {
                      setValue("selected_levels", [...new Set([...current, ...ids])])
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${getDiffColor(d)}`}
                >
                  {getDiffLabel(d)}
                </button>
              ))}
            </div>

            <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
              {levels?.map((level: any) => {
                const isSelected = selectedLevels.some((lv: any) => lv.id === level.id);
                console.log(selectedLevels, isSelected, level);
                return (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => toggleLevel(level)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 ${
                      isSelected
                        ? "bg-purple-600/40 border-2 border-purple-400"
                        : "bg-white/5 border-2 border-transparent hover:bg-white/10"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isSelected ? "bg-purple-500 text-white" : "bg-white/10 text-purple-300"
                    }`}>
                      {isSelected ? <Check className="w-4 h-4" /> : <span className="text-sm font-bold">{level.id}</span>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm truncate">{level.name}</p>
                      {/* <p className="text-purple-300 text-xs">by {level.author}</p> */}
                    </div>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold border ${getDiffColor(level.difficulty)}`}>
                      {getDiffLabel(level.difficulty)}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
  );
};