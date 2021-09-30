import { Server, Socket } from 'socket.io'
import GameServer from './GameServer'

const socketEvents = {
    characterLogin(socket: Socket, ...additionalParameters) {
        const playersService =
            this.game.serviceLocator.getService('playersService')
        playersService.addPlayer(socket.id)
    },
    playerMove(socket: Socket, ...additionalParameters) {
        const playersService =
            this.game.serviceLocator.getService('playersService')
        playersService.playerMove(socket.id, additionalParameters)
    },
}

export default class SocketService {
    instance: Server
    connectedSockets: Socket[] = []
    socketEventHandlers = {
        characterLogin: socketEvents.characterLogin.bind(this),
        playerMove: socketEvents.playerMove.bind(this),
    }

    private game: GameServer

    constructor(game: GameServer) {
        this.game = game

        this.initializeServer()
        this.connectionHandler()
        this.emitGameData()
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
            this.connectedSockets.push(socket)
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

    emitGameData(): void {
        const mapService = this.game.serviceLocator.getService('mapService')
        const playersService =
            this.game.serviceLocator.getService('playersService')

        setInterval(() => {
            const dataToEmit = {
                mapData: mapService.dataForClient,
                playersData: playersService.playersData,
            }

            this.connectedSockets.forEach((socket: Socket) =>
                socket.emit('gameData', dataToEmit)
            )
        }, 1000 / 25)
    }
}
