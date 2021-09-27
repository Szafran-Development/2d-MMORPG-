import { Server, Socket } from 'socket.io'
import gameServer from '../index'

const socketEvents = {
    characterLogin(socket: Socket, ...additionalParameters) {
        console.log(socket, additionalParameters)
    },
}

export default class SocketHandler {
    instance: Server
    socketEventHandlers = {
        characterLogin: socketEvents.characterLogin,
    }

    constructor() {
        this.initializeServer()
        this.connectionHandler()
    }

    initializeServer(): void {
        this.instance = new Server(3001, {
            path: '/',
            cors: {
                origin: true,
            },
        })
    }

    connectionHandler(): void {
        this.instance.on('connection', (socket) => {
            console.log('player connected')
            gameServer.connectedSockets.push(socket)
            this.bindHandlersToClientSocket(socket)
        })
    }

    bindHandlersToClientSocket(clientSocket: Socket): void {
        Object.entries(this.socketEventHandlers).forEach(
            ([eventName, handler]) => {
                clientSocket.on(eventName, (additionalParameters) => {
                    handler(clientSocket, additionalParameters)
                })
            }
        )
    }
}
