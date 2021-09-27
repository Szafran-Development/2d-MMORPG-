import { io, Socket } from 'socket.io-client'

const socketEvents = {
    receivedGameData(socket, ...data) {
        console.log(data)
    },
}

export default class SocketHandler {
    instance: Socket | undefined

    socketEventHandlers = {
        gameData: socketEvents.receivedGameData,
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
}
