export default class Render {
    contextLayer // to chyba można przez refa

    showColliders = false

    constructor() {
        this.init()
    }

    init() {
        this.setContext()
        this.renderLoop()
    }

    setContext() {
        const canvas: HTMLCanvasElement = document.getElementById(
            'ctx'
        ) as HTMLCanvasElement
        this.contextLayer = canvas.getContext('2d')
    }

    renderMap() {}

    renderMapObjects() {}

    renderEntities() {}

    renderTransparent() {}

    renderLoop() {
        this.renderMap()
        this.renderMapObjects()
        this.renderEntities()
        this.renderTransparent()

        window.requestAnimationFrame(this.renderLoop)
    }
}
