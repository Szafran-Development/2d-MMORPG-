export default class Entity {
    id: string
    name: string
    x: number
    y: number
    width: number
    height: number
    visible: boolean
    imageSrc: string

    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.x = data.x
        this.y = data.y
        this.width = data.width || 32
        this.height = data.height || 32
        this.visible = data.visible
        this.imageSrc = data.imageSrc
    }
}
