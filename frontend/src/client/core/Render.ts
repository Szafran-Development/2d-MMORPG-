import EventBus, { Observable } from '@/client/core/EventBus'
// import * as tileset from '@/assets/tileset.png'

export default class Render implements Observable {
    contextLayer // to chyba można przez refa

    showColliders = false

    mapData
    tilesetImage = new Image()
    eventBus = EventBus

    horizontalMargin = 0

    constructor() {
        this.init()
    }

    init() {
        this.tilesetImage.src =
            'https://raw.githubusercontent.com/szafran98/polania_client/master/public/img/city.png'
        this.subscribeEvents()

        this.setContext()
    }

    setContext() {
        const canvas: HTMLCanvasElement = document.getElementById(
            'game-window'
        ) as HTMLCanvasElement
        this.contextLayer = canvas.getContext('2d')
    }

    renderMap() {
        // console.log(this.mapData.layers)
        for (const i in this.mapData.layers) {
            // if (i === '2' || i === '3') break
            for (
                let index = this.mapData.layers[i].length - 1;
                index > -1;
                index--
            ) {
                const value = this.mapData.layers[i][index] - 1

                const sourceX = (value % 8) * 32
                const sourceY = Math.floor(value / 8) * 32

                const destinationX = (index % 48) * 32
                const destinationY = Math.floor(index / 48) * 32

                this.contextLayer.drawImage(
                    this.tilesetImage,
                    sourceX,
                    sourceY,
                    32,
                    32,
                    destinationX - this.horizontalMargin,
                    destinationY,
                    32,
                    32
                )
            }
        }
    }

    renderMapObjects() {}

    renderEntities() {}

    renderTransparent() {}

    renderLoop() {
        console.log(this)
        if (this.mapData) {
            console.log('render loop')
            this.renderMap()
            // this.renderMapObjects()
            // this.renderEntities()
            // this.renderTransparent()
        }
        window.requestAnimationFrame(this.renderLoop.bind(this))
    }

    subscribeEvents() {
        this.eventBus.subscribe('setMapData', this)
    }

    setMapData(data) {
        if (!this.mapData) {
            this.mapData = data
            console.log('not map data')
        }
        console.log('set map data')
        this.eventBus.unsubscribe('setMapData', this)
        this.renderLoop()
    }

    on(eventName: string, data: any) {
        this[eventName].bind(this)({ ...data })
    }
}
