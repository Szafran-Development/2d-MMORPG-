import { getCurrentInstance } from 'vue'
import { io, Socket } from 'socket.io-client'
import SocketHandler from './SocketHandler'
import Map from './Map'

export default class GameClient {
    static vueInstance = getCurrentInstance()?.appContext.app
    static instance: GameClient

    socketHandler: SocketHandler | undefined
    // player
    // playerGroup
    // playersList
    playersManager
    mapManager = new Map()
    renderManager
    fightManager
    tradeManager
    sceneManager

    constructor() {
        this.init()
    }

    init(): void {
        this.initializeSocketHandler()
    }

    static getInstance(): GameClient {
        if (!GameClient.instance) {
            GameClient.instance = new GameClient()
        }
        return GameClient.instance
    }

    initializeSocketHandler(): void {
        this.socketHandler = new SocketHandler()
    }
}
