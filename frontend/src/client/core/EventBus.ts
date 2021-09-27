export interface Observable {
    eventBus: EventBus
    on(eventName: string, data: any): void
}

class EventBus {
    private observables: any[] = []

    subscribe<T extends Observable>(eventName: string, listener: T): void {
        const isEventAlreadyRegistered = this.observables.find(
            (event) =>
                event.eventName === eventName && event.listener === listener
        )
        if (!isEventAlreadyRegistered) {
            this.observables.push({
                eventName,
                listener,
            })
        }
        console.log(this.observables)
    }

    unsubscribe<T extends Observable>(eventName: string, listener: T) {
        const eventToDelete = this.observables.find(
            (event) =>
                event.eventName === eventName && event.listener === listener
        )
        const eventToDeleteIndex = this.observables.indexOf(eventToDelete)
        this.observables.splice(eventToDeleteIndex, 1)
    }

    emit(eventName: string, data: any) {
        this.observables.forEach((observable) => {
            if (observable.eventName === eventName) {
                observable.listener.on(eventName, data)
            }
        })
    }
}

export default new EventBus()
