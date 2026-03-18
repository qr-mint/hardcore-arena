export function AchievementsPage({ onBack, t }: { onBack: () => void, t: (any: string) => string }) {
  const achievements = [
    { 
      id: 1, 
      name: 'Первая победа', 
      description: 'Пройдите первый уровень', 
      claimed: true, 
      rarity: 'common',
      image: '/trophy-golden-award-medal.jpg'
    },
    { 
      id: 2, 
      name: 'Скоростной бегун', 
      description: 'Пройдите уровень за 10 секунд', 
      claimed: true, 
      rarity: 'rare',
      image: '/lightning-bolt-speed-blue.jpg'
    },
    { 
      id: 3, 
      name: 'Мастер уклонения', 
      description: 'Пройдите без касаний', 
      claimed: false, 
      rarity: 'epic',
      image: '/target-precision-purple-glow.jpg'
    },
    { 
      id: 4, 
      name: 'Легенда', 
      description: 'Победите в турнире', 
      claimed: false, 
      rarity: 'legendary',
      image: '/crown-golden-king-legendary.jpg'
    },
    { 
      id: 5, 
      name: 'Неудержимый', 
      description: '10 побед подряд', 
      claimed: false, 
      rarity: 'epic',
      image: '/fire-flame-unstoppable-purple.jpg'
    },
    { 
      id: 6, 
      name: 'Коллекционер', 
      description: 'Соберите все NFT', 
      claimed: false, 
      rarity: 'legendary',
      image: '/diamond-gem-crystal-rainbow.jpg'
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600'
      case 'rare': return 'from-blue-400 to-blue-600'
      case 'epic': return 'from-purple-400 to-purple-600'
      case 'legendary': return 'from-yellow-400 to-orange-600'
      default: return 'from-gray-400 to-gray-600'
    }
  }

  const getRarityLabel = (rarity: string) => {
    return t(`achievements.rarity.${rarity}`);
  }

  const getRarityBorderColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-400'
      case 'rare': return 'border-blue-400'
      case 'epic': return 'border-purple-400'
      case 'legendary': return 'border-yellow-400'
      default: return 'border-gray-400'
    }
  }
  
  return (
    <div className="flex-1 max-w-2xl mx-auto w-full">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{t('achievements.title')}</h1>
        <p className="text-purple-200">{t('achievements.subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`relative overflow-hidden border-2 bg-white/10 backdrop-blur-md rounded-xl transition-all ${
              achievement.claimed 
                ? `${getRarityBorderColor(achievement.rarity)} hover:scale-105 cursor-pointer shadow-lg` 
                : 'border-white/10 opacity-50'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${getRarityColor(achievement.rarity)} opacity-20`} />
            
            <div className="relative p-3">
              {/* NFT Image */}
              <div className="relative mb-3 rounded-lg overflow-hidden bg-white/5">
                <img 
                  src={achievement.image || "/placeholder.svg"} 
                  alt={achievement.name}
                  className={`w-full aspect-square object-cover ${
                    achievement.claimed ? 'opacity-100' : 'opacity-30 grayscale'
                  }`}
                />
                {!achievement.claimed && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <div className="text-white text-4xl">🔒</div>
                  </div>
                )}
              </div>
              
              <h3 className="text-white font-bold text-sm mb-1 text-center text-balance">{achievement.name}</h3>
              <p className="text-purple-200 text-xs mb-2 text-center leading-relaxed text-balance">{achievement.description}</p>
              
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/20">
                <span className={`text-xs font-semibold ${
                  achievement.rarity === 'legendary' ? 'text-yellow-300' :
                  achievement.rarity === 'epic' ? 'text-purple-300' :
                  achievement.rarity === 'rare' ? 'text-blue-300' :
                  'text-gray-300'
                }`}>
                  {getRarityLabel(achievement.rarity)}
                </span>
                {achievement.claimed ? (
                  <span className="text-xs text-green-300 font-semibold">{t('achievements.received')}</span>
                ) : (
                  <span className="text-xs text-gray-400">{t('achievements.locked')}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}