import { io, Socket } from 'socket.io-client'

export default class SocketHandler {
    instance: Socket | undefined

    constructor() {
        this.initializeConnection()
    }

    initializeConnection(): void {
        this.instance = io('http://localhost:3001')
    }
}
