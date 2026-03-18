import type React from "react"
import { useFieldArray } from "react-hook-form"
import {
  Crown,
  Sparkles,
  Trophy,
  X,
  Zap,
  Image as ImageIcon,
} from "lucide-react"
import { useState } from "react"
import { NftModal } from "./NFTModal"

const COLORS = [
  { name: "Синий", value: "from-blue-500 to-blue-700", bg: "bg-blue-500" },
  { name: "Фиолетовый", value: "from-purple-500 to-purple-700", bg: "bg-purple-500" },
  { name: "Зеленый", value: "from-green-500 to-green-700", bg: "bg-green-500" },
  { name: "Красный", value: "from-red-500 to-red-700", bg: "bg-red-500" },
  { name: "Оранжевый", value: "from-yellow-500 to-orange-600", bg: "bg-orange-500" },
  { name: "Розовый", value: "from-pink-500 to-purple-700", bg: "bg-pink-500" },
]

function IconPreview({ icon, size = "w-6 h-6" }: { icon: string; size?: string }) {
  switch (icon) {
    case "trophy": return <Trophy className={size} />
    case "zap": return <Zap className={size} />
    case "crown": return <Crown className={size} />
    case "star": return <Sparkles className={size} />
    case "sparkles": return <Sparkles className={size} />
    case "shield": return <Trophy className={size} />
    default: return <Trophy className={size} />
  }
}

interface PrizeFormProps {
  t: (e: string) => string;
  watchAll: any;
  control: any;
  setValue: any;
  getValues: any;
}

export const PrizesForm = ({ t, control, watchAll, setValue, getValues }: PrizeFormProps) => {  
    const { replace } = useFieldArray({ control, name: "winners" });
    const [nftModalOpen, setNftModalOpen] = useState(false)
    const [editingNftIndex, setEditingNftIndex] = useState<number | null>(null)
    const entryType = watchAll.entryType
    const selectedIcon = watchAll.icon
    const selectedColor = watchAll.color
    const selectedLevels = watchAll.selected_levels
    const winnersCount = watchAll.winners_count;
    const winners = watchAll.winners
    const tokenVal = watchAll.token
  
    const updateWinnersCount = (count: number) => {
      setValue("winners_count", count)
      const newWinners: any[] = []
      const basePercent = Math.floor(100 / count)
      let remaining = 100
      for (let i = 0; i < count; i++) {
        const percent = i === count - 1 ? remaining : basePercent
        remaining -= percent
        newWinners.push({ place: i + 1, percent, nft: null })
      }
      replace(newWinners)
    }
  
    const getTotalPercent = () => winners.reduce((sum, w) => sum + w.percent, 0)
  
    const handleDrag = (index: number, e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      const bar = (e.target as HTMLElement).closest("[data-bar]") as HTMLElement
      if (!bar) return
      const rect = bar.getBoundingClientRect()
      const handleMove = (clientX: number) => {
        const x = clientX - rect.left
        const percent = Math.max(1, Math.min(100, Math.round((x / rect.width) * 100)))
        const current = getValues("winners")
        const updated = [...current]
        updated[index] = { ...updated[index], percent }
        setValue("winners", updated)
      }
      if ("touches" in e) {
        const touchHandler = (te: TouchEvent) => handleMove(te.touches[0].clientX)
        const endHandler = () => { document.removeEventListener("touchmove", touchHandler); document.removeEventListener("touchend", endHandler) }
        document.addEventListener("touchmove", touchHandler)
        document.addEventListener("touchend", endHandler)
      } else {
        const mouseHandler = (me: MouseEvent) => handleMove(me.clientX)
        const endHandler = () => { document.removeEventListener("mousemove", mouseHandler); document.removeEventListener("mouseup", endHandler) }
        document.addEventListener("mousemove", mouseHandler)
        document.addEventListener("mouseup", endHandler)
      }
    }
  
  return (
    <div className="space-y-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
        <label className="block text-white font-semibold mb-2">
          Количество победителей: {winnersCount}
        </label>
        <input
          type="range" min={1} max={1000} step={1} value={winnersCount}
          onChange={(e) => updateWinnersCount(Number(e.target.value))}
          className="w-full accent-purple-500"
        />
        <div className="flex justify-between text-purple-300 text-xs mt-1">
          <span>1</span><span>1000</span>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
        <div className="flex items-center justify-between mb-4">
          <label className="text-white font-semibold">Распределение призов</label>
          <span className={`text-sm font-bold ${getTotalPercent() === 100 ? "text-green-400" : getTotalPercent() > 100 ? "text-red-400" : "text-yellow-400"}`}>
            {getTotalPercent()}%
          </span>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
        {winners.slice(0, Math.min(winners.length, 20)).map((w, i) => (
          <div key={i} className="bg-white/5 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  i === 0 ? "bg-yellow-400 text-yellow-900" :
                  i === 1 ? "bg-gray-300 text-gray-800" :
                  i === 2 ? "bg-orange-400 text-orange-900" :
                  "bg-white/20 text-white"
                  }`}>
                  {w.place}
                </span>
                <span className="text-white text-sm font-medium">
                  {i === 0 ? "1-е место" : i === 1 ? "2-е место" : i === 2 ? "3-е место" : `${w.place}-е место`}
                </span>
              </div>
            <span className="text-yellow-300 font-bold text-sm">{w.percent}%</span>
              </div>

                  <div
                    data-bar
                    className="relative w-full h-8 bg-white/10 rounded-lg cursor-pointer overflow-hidden"
                    onMouseDown={(e) => handleDrag(i, e)}
                    onTouchStart={(e) => handleDrag(i, e)}
                  >
                    <div
                      className={`absolute inset-y-0 left-0 rounded-lg transition-[width] duration-75 ${
                        i === 0 ? "bg-yellow-500/60" : i === 1 ? "bg-gray-400/60" : i === 2 ? "bg-orange-500/60" : "bg-purple-500/60"
                      }`}
                      style={{ width: `${w.percent}%` }}
                    />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-lg border-2 border-purple-400"
                      style={{ left: `calc(${w.percent}% - 10px)` }}
                    />
                  </div>

                  {/* NFT Prize */}
                  <div className="mt-2">
                    {w.nft ? (
                      <div
                        onClick={() => { setEditingNftIndex(i); setNftModalOpen(true) }}
                        className="flex items-center gap-2 bg-purple-600/30 border border-purple-400/50 rounded-lg p-2 cursor-pointer hover:bg-purple-600/50 transition-all"
                      >
                        {w.nft.image && (
                          <img src={w.nft.image} alt={w.nft.name} className="w-8 h-8 rounded object-cover flex-shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-xs font-semibold truncate">{w.nft.name}</p>
                          <p className="text-purple-300 text-[10px] truncate">{w.nft.collection || "Без коллекции"}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            const current = getValues("winners")
                            const updated = [...current]
                            updated[i] = { ...updated[i], nft: null }
                            setValue("winners", updated)
                          }}
                          className="w-5 h-5 rounded bg-red-500/30 flex items-center justify-center flex-shrink-0 hover:bg-red-500/60"
                        >
                          <X className="w-3 h-3 text-red-300" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => { setEditingNftIndex(i); setNftModalOpen(true) }}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-purple-300 hover:bg-white/20 border border-transparent transition-all flex items-center gap-1"
                      >
                        <ImageIcon className="w-3 h-3" />
                        Добавить NFT приз
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {winners.length > 20 && (
                <div className="text-center text-purple-300 text-sm py-2">
                  {"... и ещё "}{winners.length - 20}{" мест (распределение равномерное)"}
                </div>
              )}
            </div>
          </div>

          {/* Preview summary */}
          <div className={`bg-gradient-to-r ${COLORS[selectedColor].value} rounded-xl p-4 border-2 border-white/20`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
                <IconPreview icon={selectedIcon} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{watchAll.name || "Турнир"}</h3>
                <p className="text-white/70 text-sm">{watchAll.startDate} - {watchAll.endDate}</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-white/10 rounded-lg p-2">
                <p className="text-white/60 text-xs">Игроки</p>
                <p className="text-white font-bold text-sm">{watchAll.playerLimit}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <p className="text-white/60 text-xs">Взнос</p>
                <p className="text-white font-bold text-sm">
                  {entryType === "token" ? `${watchAll.entryAmount} ${tokenVal}` : entryType === "ticket" ? `${watchAll.ticketAmount}` : "NFT"}
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <p className="text-white/60 text-xs">Уровни</p>
                <p className="text-white font-bold text-sm">{selectedLevels.length}</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2">
                <p className="text-white/60 text-xs">Призы</p>
                <p className="text-white font-bold text-sm">{winnersCount}</p>
              </div>
        </div>
      </div>
      <NftModal
        isOpen={nftModalOpen}
        onClose={() => { setNftModalOpen(false); setEditingNftIndex(null) }}
        initial={editingNftIndex !== null ? winners[editingNftIndex]?.nft : null}
        onSave={(nft) => {
          if (editingNftIndex !== null) {
            const current = getValues("winners")
            const updated = [...current]
            updated[editingNftIndex] = { ...updated[editingNftIndex], nft }
            setValue("winners", updated)
          }
        }}
      />
    </div>
  )
};