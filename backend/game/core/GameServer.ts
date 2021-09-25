import { Connection, createConnection } from 'typeorm'
import SocketHandler from './SocketHandler'
// import { SocketEventTypes } from '../../../enums/SocketEventTypes'

export default class GameServer {
    connectedSockets = []
    connectedPlayers = []
    actualCombats = []
    actualTrades = []
    socketHandler: SocketHandler
    db: Connection

    constructor() {
        this.init()
    }

    async init(): Promise<void> {
        await this.createDatabaseConnection()
        this.initializeSocketHandler()
        this.emitGameData()
    }

    initializeSocketHandler(): void {
        this.socketHandler = new SocketHandler()
    }

    async createDatabaseConnection(): Promise<void> {
        this.db = await createConnection()
    }

    emitGameData(): void {
        setInterval(() => {
            this.connectedSockets.forEach((socket) =>
                socket.emit('SocketEventTypes.GameData', '')
            )
        }, 1000 / 25)
    }
}
