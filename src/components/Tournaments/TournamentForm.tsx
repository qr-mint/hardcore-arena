
import { useForm } from "react-hook-form"
import {
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

import { InfoForm } from "@/components/Tournaments/InfoForm"
import { EntryForm } from "@/components/Tournaments/EntryForm"
import { LevelForm } from "@/components/Tournaments/LevelForm"
import { PrizesForm } from "@/components/Tournaments/PrizesForm"
import { useWizardContext, WizardStages } from "../Wizard"
import { useTranslation } from "react-i18next"
import { createTournament } from "@/api/game/tournaments"
import { toast } from "react-toastify"
import { SocialForm } from "./SocialForm"

type EntryType = "token" | "ticket" | "nft"
type Blockchain = "ton" | "ethereum" | "polygon"
type Token = "TON" | "USDT" | "NOT"
type TournamentType = "leaderboard" | "single_attempt" | "survival"
type Schedule = "daily" | "weekend" | "special" | "season";

interface NftPrize {
  name: string
  collection: string
  image: string
  description: string
}

interface WinnerField {
  place: number
  percent: number
  nft: NftPrize | null
}

interface SocialTask {
  type: "telegram" | "twitter" | "discord" | "youtube";
  value?: string;
}

interface TournamentFormData {
  name: string
  description: string
  playerLimit: number
  type: TournamentType
  schedule: Schedule
  icon: string
  color: number
  start_at: string
  end_at: string
  entryType: EntryType
  network: Blockchain
  token: Token
  entry_amount: string
  entry_tickets: string
  nftRequired: boolean
  collection_address: string
  selected_levels: any[]
  winners_count: number
  winners: WinnerField[]
  social_tasks?: SocialTask[]
}

const TOTAL_STEPS = 5

export const TournamentForm = () => {
    const { t } = useTranslation();
    const { currentStage, handlePrev, handleNext } = useWizardContext();
    const navigate = useNavigate();
    const {
      register,
      control,
      watch,
      setValue,
      getValues,
      trigger,
      formState: { errors },
    } = useForm<TournamentFormData>({
      defaultValues: {
        name: "",
        description: "",
        playerLimit: 100,
        type: "leaderboard",
        schedule: "daily",
        icon: "trophy",
        color: 0,
        start_at: "",
        end_at: "",
        entryType: "token",
        network: "ton",
        token: "TON",
        entry_amount: "0.1",
        entry_tickets: "5",
        nftRequired: false,
        collection_address: "",
        selected_levels: [],
        winners_count: 3,
        winners: [
          { place: 1, percent: 50, nft: null },
          { place: 2, percent: 30, nft: null },
          { place: 3, percent: 20, nft: null },
        ],
        social_tasks: [{ type: "telegram", value: "" }]
      },
      mode: "onChange",
    })
  
    const watchAll = watch()
    const winners = watchAll.winners
  
  
    const getTotalPercent = () => winners.reduce((sum, w) => sum + w.percent, 0)
  
    const onBack = () => {
      navigate(-1)
    }
  
    const canProceed = () => {
      const v = getValues()
      if (currentStage === 1) return v.name.trim().length > 0 && v.start_at && v.end_at
      if (currentStage === 2) {
        if (v.entryType === "token") return Number(v.entry_amount) > 0
        if (v.entryType === "ticket") return Number(v.entry_tickets) > 0
        if (v.entryType === "nft") return v.collection_address.trim().length > 0
        return true
      }
      if (currentStage === 3) return v.selected_levels.length > 0
      if (currentStage === 4) return true // socialTasks optional
      if (currentStage === 5) return getTotalPercent() <= 100
      return true
    }
  
    const handleSubmit = async () => {
      try {
        if (canProceed()) {
          const data = getValues()
          console.log("Tournament created:", data);
          const prizes = data.winners.reduce<any>((acc, curr) => {
            const foundIndex = acc.findIndex((prize: any) => prize.percent === curr.percent);
            if (foundIndex > -1) {
              acc[foundIndex].place_to += 1;
              return acc;
            }
            return acc.concat({
              nft: curr.nft,
              percent: curr.percent,
              place_from: curr.place,
              place_to: curr.place
            });
          }, []);
          const start_at = new Date(data.start_at).toISOString();
          const end_at = new Date(data.end_at).toISOString();
          const telegram_tasks = data.social_tasks?.filter((task) => task.type === "telegram");
          await createTournament({
            name: data.name,
            description: data.description,
            type: data.type, schedule: data.schedule,
            start_at, end_at,
            color: data.color, icon: data.icon,
            entry_amount: data.entry_amount, entry_tickets: data.entry_tickets,
            collection_address: data.collection_address,
            network: data.network, currency_token: data.token, token: data.token,
            player_limit: data.playerLimit, selected_levels: data.selected_levels,
            prizes, winners_count: data.winners_count, telegram_tasks

          })
          //onBack()
        }
      } catch (err) {
        toast.error((err as any).message);
      }
    }

  return (
    <div className="flex-1 max-w-2xl mx-auto w-full">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={currentStage > 1 ? handlePrev : onBack}
              className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">Создать турнир</h1>
              <p className="text-purple-200 text-sm">
                Этап {currentStage} из {TOTAL_STEPS}
              </p>
            </div>
          </div>
    
          {/* Progress */}
          <div className="flex gap-2 mb-6">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full transition-all ${s <= currentStage ? "bg-purple-400" : "bg-white/20"}`}
              />
            ))}
          </div>
          <WizardStages>
            <InfoForm t={t} register={register} errors={errors} control={control} watchAll={watchAll} />
            <EntryForm t={t} register={register} setValue={setValue} control={control} watchAll={watchAll} />
            <LevelForm t={t} watchAll={watchAll} setValue={setValue} getValues={getValues} />
            <SocialForm t={t} register={register} watchAll={watchAll} control={control} />
            <PrizesForm t={t} watchAll={watchAll} control={control} setValue={setValue} getValues={getValues} />
          </WizardStages>
          {/* Navigation buttons */}
          <div className="flex gap-3 mt-6 pb-24">
            {currentStage > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <ArrowLeft className="w-5 h-5" />
                Назад
              </button>
            )}
            {currentStage < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={() => canProceed() && handleNext()}
                className={`flex-1 font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  canProceed()
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }`}
              >
                Далее
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className={`flex-1 font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  canProceed()
                    ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg"
                    : "bg-white/10 text-white/40 cursor-not-allowed"
                }`}
              >
                <Check className="w-5 h-5" />
                Создать турнир
              </button>
            )}
          </div>
    </div>
  )
};