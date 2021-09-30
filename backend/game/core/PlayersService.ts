import Player from '../gameplay/Player'
import mockPlayerData from '../mocks/mockPlayerData'

export default class PlayersService {
    connectedPlayers: Player[] = []

    get playersData() {
        return this.connectedPlayers
    }

    getPlayerBySocketId(socketId) {
        return this.connectedPlayers.find(
            (player) => player.socketId === socketId
        )
    }

    addPlayer(socketId: string) {
        this.connectedPlayers.push(
            new Player({
                ...mockPlayerData,
                socketId: socketId,
            })
        )
    }

    playerMove(socketId, data) {
        const player = this.getPlayerBySocketId(socketId)
        player.updatePosition(data)
    }
}
