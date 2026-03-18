import { Plus, Trash2 } from "lucide-react";
import { Controller, useFieldArray } from "react-hook-form";

interface PrizeFormProps {
  t: (e: string) => string;
  watchAll: any;
  control: any;
  register: any;
}

const SOCIAL_TYPES = [
  { key: "telegram" as const, label: "Telegram", icon: "TG", color: "bg-blue-500" },
  { key: "twitter" as const, label: "Twitter/X", icon: "X", color: "bg-black" },
  { key: "discord" as const, label: "Discord", icon: "DC", color: "bg-indigo-500" },
  { key: "youtube" as const, label: "YouTube", icon: "YT", color: "bg-red-500" },
];

export const SocialForm = ({ t, watchAll, register, control }: PrizeFormProps) => {
  const { fields: socialFields, append: appendSocial, remove: removeSocial } = useFieldArray({ control, name: "tasks" })
  const tasks = watchAll.tasks;
  return (
    <div className="space-y-4">
      <div className="bg-blue-500/10 backdrop-blur-md rounded-xl border border-blue-400/30 p-4 mb-4">
        <p className="text-blue-300 text-sm font-semibold mb-1">Важно для Telegram</p>
        <p className="text-white/80 text-xs leading-relaxed">
          Для автоматической проверки подписки добавьте нашего бота <span className="text-blue-300 font-mono">@hardcore_arena_bot</span> в ваш канал или группу как администратора.
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
        <div className="flex items-center justify-between mb-3">
          <label className="text-white font-semibold">Подписки на соцсети</label>
          <span className="text-purple-300 text-xs px-2 py-0.5 rounded bg-white/10">Опционально</span>
        </div>
        <p className="text-purple-300 text-xs mb-4">Укажите каналы на которые игроки должны подписаться для участия</p>

        <div className="space-y-3">
          {socialFields.map((field, index) => (
            <div key={field.id} className="bg-white/5 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Controller
                  control={control}
                  name={`tasks.${index}.type`}
                  render={({ field: typeField }) => (
                    <div className="flex gap-1">
                      {SOCIAL_TYPES.map((st) => (
                        <button
                          key={st.key}
                          type="button"
                          onClick={() => typeField.onChange(st.key)}
                          className={`w-9 h-9 rounded-lg ${st.color} flex items-center justify-center text-white text-xs font-bold transition-all ${
                            typeField.value === st.key ? "ring-2 ring-white scale-110" : "opacity-50 hover:opacity-80"
                          }`}
                        >
                          {st.icon}
                        </button>
                      ))}
                    </div>
                  )}
                />
                {socialFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSocial(index)}
                    className="ml-auto w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center transition-all"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                )}
                </div>
                <input
                  {...register(`tasks.${index}.value`)}
                  placeholder={
                    tasks[index]?.type === "telegram" ? "@channel или t.me/..." :
                    tasks[index]?.type === "twitter" ? "@username или twitter.com/..." :
                    tasks[index]?.type === "discord" ? "discord.gg/..." :
                    "youtube.com/..."
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder-purple-300/60 outline-none focus:border-purple-400 transition-colors text-sm"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => appendSocial({ type: "telegram", value: "" })}
            className="w-full mt-3 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-purple-200 font-semibold text-sm transition-all flex items-center justify-center gap-2 border border-dashed border-white/20"
          >
            <Plus className="w-4 h-4" />
            Добавить соцсеть
        </button>
      </div>
    </div>
  );
};