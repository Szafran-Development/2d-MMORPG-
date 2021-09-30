import { Connection, createConnection } from 'typeorm'
import SocketService from './SocketService'
import { Socket } from 'socket.io'
import MapService from './MapService'
import PlayersService from './PlayersService'
import ServiceLocator from './ServiceLocator'

export default class GameServer {
    db: Connection

    serviceLocator = new ServiceLocator()

    constructor() {
        this.init()
    }

    async init(): Promise<void> {
        await this.createDatabaseConnection()
        this.createServices()
    }

    createServices(): void {
        this.serviceLocator.setService('socketService', new SocketService(this))
        this.serviceLocator.setService('mapService', new MapService())
        this.serviceLocator.setService('playersService', new PlayersService())
    }

    async createDatabaseConnection(): Promise<void> {
        this.db = await createConnection()
    }
}
