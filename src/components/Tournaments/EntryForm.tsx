import { getTokens } from "@/api/tokens";
import { useEffect, useState } from "react"
import { Controller } from "react-hook-form";
import {toast} from 'react-toastify';

interface EntryFormProps {
  t: (e: string) => string;
  watchAll: any;
  register: any;
  control: any;
  setValue: any;
}

export const EntryForm = ({ t, watchAll, control, register, setValue }: EntryFormProps) => {  
  const [tokens, setTokens] = useState([{
    name: "TON",
    currency: "ton"
  }]);
  const entryType = watchAll.entryType
  const tokenVal = watchAll.token

  useEffect(() => {
    const loadTokens = async () => {
      try {
        const list = await getTokens();
        setTokens(tokens.concat(list));
      } catch (err) {
        toast.error((err as any).message);
      }
    };
    if (!tokens) {
      loadTokens();
    }
  }, []);
  
  return (
    <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
            <label className="block text-white font-semibold mb-3">Тип взноса</label>
            <Controller
              control={control}
              name="entryType"
              render={({ field }) => (
                <div className="grid grid-cols-3 gap-2">
                  {([
                    { key: "token" as EntryType, label: "Токен", desc: "TON / USDT" },
                    { key: "ticket" as EntryType, label: "Билеты", desc: "Игровые билеты" },
                    { key: "nft" as EntryType, label: "NFT", desc: "Владение NFT" },
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
                      <span className="font-bold">{t.label}</span>
                      <span className="text-xs opacity-70">{t.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            />
          </div>

          {entryType === "token" && (
            <>
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
                <label className="block text-white font-semibold mb-3">Блокчейн</label>
                <Controller
                  control={control}
                  name="network"
                  render={({ field }) => (
                    <div className="grid grid-cols-3 gap-2">
                      {([
                        { key: "ton" as Blockchain, label: "TON" },
                      ]).map((b) => (
                        <button
                          key={b.key}
                          type="button"
                          onClick={() => field.onChange(b.key)}
                          className={`px-3 py-3 rounded-xl font-medium text-sm transition-all ${
                            field.value === b.key
                              ? "bg-blue-600 text-white shadow-lg border-2 border-blue-400"
                              : "bg-white/10 text-purple-200 hover:bg-white/20 border-2 border-transparent"
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  )}
                />
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
                <label className="block text-white font-semibold mb-3">Токен</label>
                <Controller
                  control={control}
                  name="token"
                  render={({ field }) => (
                    <div className="grid grid-cols-3 gap-2">
                      {tokens?.map((token: any) => (
                        <button
                          key={token.id}
                          type="button"
                          onClick={() => field.onChange(token.currency)}
                          className={`px-3 py-3 rounded-xl font-medium text-sm transition-all ${
                            field.value === token.currency
                              ? "bg-yellow-600 text-white shadow-lg border-2 border-yellow-400"
                              : "bg-white/10 text-purple-200 hover:bg-white/20 border-2 border-transparent"
                          }`}
                        >
                          {token.name}
                        </button>
                      ))}
                    </div>
                  )}
                />
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
                <label className="block text-white font-semibold mb-2">Сумма взноса ({tokenVal})</label>
                <input
                  {...register("entryAmount", { required: entryType === "token" })}
                  type="number" placeholder="0.1" step="0.01" min="0"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-300 outline-none focus:border-purple-400 transition-colors"
                />
              </div>
            </>
          )}

          {entryType === "ticket" && (
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
              <label className="block text-white font-semibold mb-2">Количество билетов</label>
              <input
                {...register("ticketAmount", { required: entryType === "ticket" })}
                type="number" placeholder="5" min="1"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-300 outline-none focus:border-purple-400 transition-colors"
              />
            </div>
          )}

          {entryType === "nft" && (
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
              <label className="block text-white font-semibold mb-2">Адрес NFT коллекции</label>
              <input
                {...register("collection_address", { required: entryType === "nft" })}
                placeholder="EQD..."
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-300 outline-none focus:border-purple-400 transition-colors font-mono text-sm"
              />
              <p className="text-purple-300 text-xs mt-2">Только владельцы NFT из этой коллекции смогут участвовать</p>
            </div>
          )}

          {entryType !== "nft" && (
            <Controller
              control={control}
              name="nftRequired"
              render={({ field: nftField }) => (
                <div className={`backdrop-blur-md rounded-xl border p-4 transition-all ${nftField.value ? "bg-purple-600/15 border-purple-400/40" : "bg-white/10 border-white/20"}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-white font-semibold">Проверка NFT</p>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/10 text-purple-300 uppercase">Опционально</span>
                      </div>
                      <p className="text-purple-300 text-xs mt-0.5">Только владельцы NFT смогут участвовать</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        nftField.onChange(!nftField.value)
                        if (nftField.value) setValue("nftAddress", "")
                      }}
                      className={`relative w-14 h-8 rounded-full transition-colors flex-shrink-0 ${nftField.value ? "bg-purple-600" : "bg-white/20"}`}
                    >
                      <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${nftField.value ? "translate-x-7" : "translate-x-1"}`} />
                    </button>
                  </div>
                  {nftField.value && (
                    <div className="mt-3 space-y-2">
                      <input
                        {...register("nftAddress")}
                        placeholder="Адрес NFT коллекции (EQD...)"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-300 outline-none focus:border-purple-400 transition-colors font-mono text-sm"
                      />
                      <p className="text-purple-400 text-xs">Укажите адрес коллекции. Система проверит владение NFT перед входом в турнир.</p>
                    </div>
                  )}
                </div>
              )}
            />
          )}
        </div>
  )
}