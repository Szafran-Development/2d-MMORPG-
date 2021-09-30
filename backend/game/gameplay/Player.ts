import Entity from './Entity'

export default class Player extends Entity {
    socketId: string
    hasMoved = false
    currentDirection: number
    frameCount = 0
    currentLoopIndex = 0
    maxSpeed = 2
    currentInput = {
        right: false,
        left: false,
        up: false,
        down: false,
    }

    constructor(data) {
        super(data)
        this.currentDirection = data.currentDirection
        this.socketId = data.socketId
    }

    get isAbleToMoveByTile() {
        return this.x % 32 === 0 && this.y % 32 === 0
    }

    updatePosition(data) {
        if (this.isAbleToMoveByTile) {
            if (this.currentInput.right) {
                data.currentDirection = 2
                // this.moveByTile(this.currentDirection);
            } else if (this.currentInput.left) {
                data.currentDirection = 1
                // this.moveByTile(this.currentDirection);
            } else if (this.currentInput.up) {
                data.currentDirection = 3
                // this.moveByTile(this.currentDirection);
            } else if (this.currentInput.down) {
                data.currentDirection = 0
                // this.moveByTile(this.currentDirection);
            }

            if (this.frameCount >= 32) {
                this.frameCount = 0
                this.currentLoopIndex += 1
            }

            if (this.currentLoopIndex >= 4) {
                this.currentLoopIndex = 0
            }
        }
    }
}
