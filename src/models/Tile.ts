export enum TileType {
    'grass',
    'water',
    'residential',
    'industrial',
    'commercial'
}

export default class Tile {
    type: TileType;

    constructor(type = null) {
        this.type = type || TileType.grass;
    }
}
