export default class Entity {
    id: string
    name: string
    coords: {
        x: number
        y: number
    }
    width: number
    height: number
    imageSrc: string

    constructor(data) {
        this.setObjectData(data)
    }

    setObjectData(data) {
        Object.keys(this).forEach((key) => {
            this[key] = data[key]
        })
    }

    render() {
        // throw new NotImplementedError(this.constructor.name);
    }

    moveByTile(direction) {}

    attack() {}
}
