import * as map from '../assets/map.json'

export default class MapService {
    mapLayers: number[][] = []
    collidersCoordinates = []
    collidingTilesIds = []

    tileSheetSettings = {
        columns: 0,
        tileHeight: 32,
        tileWidth: 32,
    }

    constructor() {
        this.init()
    }

    get dataForClient() {
        return {
            mapData: this.map,
        }
    }

    get map() {
        return {
            layers: this.mapLayers,
            columns: map.width,
            height: map.height * this.tileSheetSettings.tileHeight,
            width: map.width * this.tileSheetSettings.tileWidth,
        }
    }

    init() {
        this.readMap()
    }

    readMap() {
        map.layers.forEach((layer) => {
            if (layer.type === 'tilelayer') {
                this.mapLayers.push(layer.data as number[])
            }
        })
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    createMapCollisions() {}
}
