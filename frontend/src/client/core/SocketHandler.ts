import { io, Socket } from 'socket.io-client'
import { Observable } from '@/client/core/EventBus'
import EventBus from '@/client/core/EventBus'

const socketEvents = {
    receivedGameData(socket, data) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.eventBus.emit('setMapData', data)
    },
}

export default class SocketHandler implements Observable {
    instance: Socket | undefined

    eventBus = EventBus

    socketEventHandlers = {
        gameData: socketEvents.receivedGameData.bind(this),
    }

    constructor() {
        this.initializeConnection()
        this.listenEvents()
    }

    initializeConnection(): void {
        this.instance = io('http://localhost:3001')
    }

    listenEvents() {
        Object.entries(this.socketEventHandlers).forEach(
            ([eventName, handler]) => {
                this.instance?.on(eventName, (additionalData) => {
                    handler(this.instance, additionalData)
                })
            }
        )
    }

    on(eventName: string, data: any) {
        this[eventName]({ ...data })
    }
}
