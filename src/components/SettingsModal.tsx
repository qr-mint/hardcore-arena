import { useState } from 'react'
import { X, Volume2, VolumeX, Globe, Gamepad2 } from 'lucide-react'
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '@/store/settings/settings';

import { Modal } from './modal';

enum controllTypes {
  joystick = "joystick",
  arrows = "arrows"
}

enum cameraMode {
  full = "full",
  player = "player"
}


export function SettingsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  
  const [soundEnabled, setSoundEnabled] = useState(true);
  const settings = useSettingsStore();
  const { t, i18n } = useTranslation();

  const handleLanguage = (key: string) => {
    settings.setLanguage(key);
    i18n.changeLanguage(key);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white/95 backdrop-blur-xl border-2 border-purple-300 shadow-2xl rounded-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-purple-900">{t('settings.title')}</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-purple-100 hover:bg-purple-200 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-purple-700" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="w-5 h-5 text-purple-600" />
                <p className="font-semibold text-purple-900">{t('settings.cameraMode.title')}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => settings.setCameraMode(cameraMode.full)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all flex flex-col items-center gap-1 ${
                    settings.cameraMode === cameraMode.full
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-purple-700 hover:bg-purple-100 border border-purple-200"
                  }`}
                >
                  <span className="text-sm">{t('settings.cameraMode.full')}</span>
                </button>
                <button
                  onClick={() => settings.setCameraMode(cameraMode.player)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all flex flex-col items-center gap-1 ${
                    settings.cameraMode === cameraMode.player
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-purple-700 hover:bg-purple-100 border border-purple-200"
                  }`}
                >
                  <span className="text-sm">{t('settings.cameraMode.player')}</span>
                </button>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="w-5 h-5 text-purple-600" />
                <p className="font-semibold text-purple-900">{t('settings.controll.title')}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => settings.setControll(controllTypes.joystick)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all flex flex-col items-center gap-1 ${
                    settings.controll === controllTypes.joystick
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-purple-700 hover:bg-purple-100 border border-purple-200"
                  }`}
                >
                  <span className="text-sm">{t('settings.controll.joystick')}</span>
                </button>
                <button
                  onClick={() => settings.setControll(controllTypes.arrows)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all flex flex-col items-center gap-1 ${
                    settings.controll === controllTypes.arrows
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-purple-700 hover:bg-purple-100 border border-purple-200"
                  }`}
                >
                  <span className="text-sm">{t('settings.controll.arrows')}</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="flex items-center gap-3">
                {soundEnabled ? (
                  <Volume2 className="w-5 h-5 text-purple-600" />
                ) : (
                  <VolumeX className="w-5 h-5 text-purple-600" />
                )}
                <div>
                  <p className="font-semibold text-purple-900">{t('settings.sound.title')}</p>
                  <p className="text-sm text-purple-600">
                    {soundEnabled ? t('settings.sound.turnOn') : t('settings.sound.turnOff')}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  soundEnabled ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                    soundEnabled ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-5 h-5 text-purple-600" />
                <p className="font-semibold text-purple-900">{t('settings.language')}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleLanguage('ru')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    settings.language === 'ru'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-purple-700 hover:bg-purple-100 border border-purple-200'
                  }`}
                >
                  Русский
                </button>
                <button
                  onClick={() => handleLanguage('en')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    settings.language === 'en'
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-purple-700 hover:bg-purple-100 border border-purple-200'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-xl shadow-lg transition-all"
          >
            {t('settings.save')}
          </button>
        </div>
      </div>
    </Modal>
  )
}