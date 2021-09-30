import GameClient from '@/client/core/GameClient'

export function useGame() {
    const getGameInstance = () => GameClient.getInstance()

    return {
        getGameInstance,
    }
}
