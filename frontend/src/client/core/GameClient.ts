import { getCurrentInstance } from 'vue'
import { io, Socket } from 'socket.io-client'
import SocketHandler from './SocketHandler'
import Map from './Map'
import { Observable } from '@/client/core/EventBus'
import EventBus from '@/client/core/EventBus'

export default class GameClient implements Observable {
    static vueInstance = getCurrentInstance()?.appContext.app
    static instance: GameClient

    eventBus = EventBus

    socketHandler: SocketHandler | undefined
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

        this.subscribeEvents()
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

    subscribeEvents() {
        this.eventBus.subscribe('socketInitialized', this)
    }

    on(eventName: string, data: any) {
        this[eventName]({ ...data })
    }
}
