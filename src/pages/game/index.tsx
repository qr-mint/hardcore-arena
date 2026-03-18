import { useRef, useState } from 'react';
import { IRefPhaserGame, PhaserGame } from '../../game/PhaserGame';
import { WinModal } from '@/components/GameModal/WinModal';
import { NoTicketsModal } from '@/components/GameModal/NoTicketModal';
import { TournamentLoseModal } from '@/components/GameModal/TournamentLoseModal';
import { TournamentWinModal } from '@/components/GameModal/TournamentWinModal';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export function Game() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [gameState, setGameState] = useState({});
    const phaserRef = useRef<IRefPhaserGame | null>(null);

    const currentScene = (scene: Phaser.Scene) => {
        console.log('currenScene');     
    }
    const onGameState = (data: any) => {
        setGameState(data);
    };
    const onClose = () => {
        setGameState({});
    };
    const handleOnBack = () => {
        navigate('/');
    };

    const renderModal = (gameState: any) => {
        switch (gameState.status) {
            case 'win':
                return <WinModal data={gameState} onClose={onClose} onBackMenu={handleOnBack} t={t} />
            case 'no_tickets':
                return <NoTicketsModal data={gameState}  onClose={onClose} onBackMenu={handleOnBack} t={t} />
            case 'tournament_lose':
                return <TournamentLoseModal data={gameState} onClose={onClose} onBackMenu={handleOnBack} t={t} />
            case 'tournament_win':
                return <TournamentWinModal data={gameState} onClose={onClose} onBackMenu={handleOnBack} t={t} />
            default:
                return <></>
        }
    }

    return (
        <div id="app">
            <PhaserGame ref={phaserRef} currentActiveScene={currentScene} onGameState={onGameState} />
            {renderModal(gameState)}
        </div>
    );
}
