import Entity from './Entity'

export default class Player extends Entity {
    static cycleLoop = [0, 1, 2, 3]

    socketId: string
    isMoving: boolean
    currentDirection: number
    frameCount: number
    currentLoopIndex: number

    constructor(data) {
        super(data)
    }

    render() {
        // tu chyba trzeba dać tylko dane, a samo rysowanie w klasie draw
    }
}
