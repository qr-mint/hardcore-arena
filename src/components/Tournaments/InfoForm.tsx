import { Controller, useForm } from "react-hook-form"
import {
  Calendar,
  Crown,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

const ICONS = ["trophy", "zap", "crown", "star", "sparkles", "shield"]
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

interface InfoFormProps {
  t: (e: string) => string;
  watchAll: any;
  register: any;
  control: any;
  errors: any;
}

export const InfoForm = ({ t, watchAll, register, control, errors }: InfoFormProps) => {
    const selectedIcon = watchAll.icon;
  
  return (
    <div className="space-y-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
        <label className="block text-white font-semibold mb-2">Название турнира</label>
        <input
          {...register("name", { required: "Введите название турнира" })}
          placeholder="Введите название..."
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-300 outline-none focus:border-purple-400 transition-colors"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
        <label className="block text-white font-semibold mb-2">Описание</label>
        <textarea
          {...register("description")}
          placeholder="Опишите турнир..."
          rows={3}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-300 outline-none focus:border-purple-400 transition-colors resize-none"
        />
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
        <Controller
          control={control}
          name="playerLimit"
          render={({ field }) => (
            <>
              <label className="block text-white font-semibold mb-2">Лимит игроков: {field.value}</label>
              <input
                type="range" min={2} max={100000000} step={1}
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="flex justify-between text-purple-300 text-xs mt-1">
                <span>2</span><span>100 000 000</span>
              </div>
            </>
          )}
        />
      </div>
      <div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
          <label className="block text-white font-semibold mb-3">Тип турнира</label>
          <Controller
            control={control}
            name="schedule"
            render={({ field }) => (
              <div className="grid grid-cols-3 gap-2">
                {([
                  { key: "daily" as const, label: "Ежедневный", icon: <Zap className="w-5 h-5" /> },
                  { key: "weekly" as const, label: "Недельный", icon: <Calendar className="w-5 h-5" /> },
                  { key: "season" as const, label: "Сезонный", icon: <Sparkles className="w-5 h-5" /> },
                  { key: "special" as const, label: "По дате", icon: <Sparkles className="w-5 h-5" /> },
                ]).map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => field.onChange(t.key)}
                    className={`px-3 py-3 rounded-xl font-medium text-sm transition-all flex flex-col items-center gap-1 ${
                      field.value === t.key
                        ? "bg-purple-600 text-white shadow-lg border-2 border-purple-400"
                        : "bg-white/10 text-purple-200 hover:bg-white/20 border-2 border-transparent"
                      }`}
                    >
                      {t.icon}
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            />
            </div>
            {["season", "special"].includes(watchAll.schedule) && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
                <label className="block text-white font-semibold mb-3">Даты проведения</label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-purple-300 text-xs mb-1">Начало</p>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300 pointer-events-none" />
                      <input
                        type="start_at"
                        {...register("start_at", { required: "Укажите дату начала" })}
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-3 py-3 text-white outline-none focus:border-purple-400 transition-colors text-sm [color-scheme:dark]"
                      />
                    </div>
                    {errors.start_at && <p className="text-red-400 text-xs mt-1">{errors.start_at.message}</p>}
                  </div>
                  <div>
                  <p className="text-purple-300 text-xs mb-1">Конец</p>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300 pointer-events-none" />
                      <input
                        type="end_at"
                        {...register("end_at", { required: "Укажите дату конца" })}
                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-3 py-3 text-white outline-none focus:border-purple-400 transition-colors text-sm [color-scheme:dark]"
                      />
                    </div>
                    {errors.endDate && <p className="text-red-400 text-xs mt-1">{errors.end_at.message}</p>}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
            <label className="block text-white font-semibold mb-3">Тип турнира</label>
            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <div className="grid grid-cols-3 gap-2">
                  {([
                    { key: "leaderboard" as const, label: "Ежедневный", icon: <Zap className="w-5 h-5" /> },
                    { key: "single_attempt" as const, label: "Недельный", icon: <Calendar className="w-5 h-5" /> },
                    { key: "survival" as const, label: "Спонсорский", icon: <Sparkles className="w-5 h-5" /> },
                  ]).map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => field.onChange(t.key)}
                      className={`px-3 py-3 rounded-xl font-medium text-sm transition-all flex flex-col items-center gap-1 ${
                        field.value === t.key
                          ? "bg-purple-600 text-white shadow-lg border-2 border-purple-400"
                          : "bg-white/10 text-purple-200 hover:bg-white/20 border-2 border-transparent"
                      }`}
                    >
                      {t.icon}
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            />
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
            <label className="block text-white font-semibold mb-3">Иконка</label>
            <Controller
              control={control}
              name="icon"
              render={({ field }) => (
                <div className="grid grid-cols-6 gap-2">
                  {ICONS.map((icon) => (
                    <button
                      key={icon}
                      type="button"
                      onClick={() => field.onChange(icon)}
                      className={`w-full aspect-square rounded-xl flex items-center justify-center transition-all ${
                        field.value === icon
                          ? "bg-purple-600 text-white shadow-lg border-2 border-purple-400"
                          : "bg-white/10 text-purple-200 hover:bg-white/20 border-2 border-transparent"
                      }`}
                    >
                      <IconPreview icon={icon} />
                    </button>
                  ))}
                </div>
              )}
            />
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
            <label className="block text-white font-semibold mb-3">Цвет плашки</label>
            <Controller
              control={control}
              name="color"
              render={({ field }) => (
                <>
                  <div className="grid grid-cols-6 gap-2">
                    {COLORS.map((color, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => field.onChange(i)}
                        className={`w-full aspect-square rounded-xl ${color.bg} transition-all ${
                          field.value === i ? "ring-4 ring-white shadow-lg scale-110" : "opacity-70 hover:opacity-100"
                        }`}
                      />
                  ))}
                </div>
                <div className={`mt-4 bg-gradient-to-r ${COLORS[field.value].value} rounded-xl p-4 flex items-center gap-3`}>
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <IconPreview icon={selectedIcon} />
                  </div>
                  <div>
                  <p className="text-white font-bold">{watchAll.name || "Название турнира"}</p>
                  <p className="text-white/70 text-sm">
                    {watchAll.startDate && watchAll.endDate ? `${watchAll.startDate} - ${watchAll.endDate}` : "Даты не выбраны"}
                  </p>
                </div>
              </div>
            </>
          )}
        />
      </div>
    </div>
  )
};