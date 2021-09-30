import MapService from './MapService'
import SocketService from './SocketService'
import PlayersService from './PlayersService'

type GameServices = {
    mapService?: MapService
    socketService?: SocketService
    playersService?: PlayersService
}

export default class ServiceLocator {
    private services: GameServices = {}

    setService<T extends keyof GameServices>(
        serviceId: T,
        instance: GameServices[T]
    ): void {
        this.services[serviceId] = instance
    }

    getService<T extends keyof GameServices>(serviceId: T): GameServices[T] {
        return this.services[serviceId]
    }
}
