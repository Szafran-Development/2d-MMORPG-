import EventBus, { Observable } from '@/client/core/EventBus'

export default class Map implements Observable {
    mapData

    eventBus = EventBus

    constructor(mapData) {
        this.mapData = mapData
    }

    on(eventName: string, data: any) {
        return
    }
}
