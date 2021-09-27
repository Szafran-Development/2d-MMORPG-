import { Connection, createConnection } from 'typeorm'
import SocketHandler from './SocketHandler'
import { Socket } from 'socket.io'
// import { SocketEventTypes } from '../../../enums/SocketEventTypes'
import Map from './Map'

export default class GameServer {
    connectedSockets = []
    connectedPlayers = []
    actualCombats = []
    actualTrades = []
    socketHandler: SocketHandler
    db: Connection
    // mapManager = new Map()

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
            // const dataToEmit = {
            //     mapData: this.mapManager.dataForClient,
            // }

            this.connectedSockets.forEach((socket: Socket) =>
                socket.emit('gameData', 'dataToEmit')
            )
        }, 1000 / 25)
    }
}
