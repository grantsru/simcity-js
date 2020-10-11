export enum TileType {
    'grass',
    'road',
    'water',
    'residential',
    'industrial',
    'commercial'
}

export default class Tile {
    type: TileType;
    x: number;
    y: number;

    constructor(type = null, private readonly x, private readonly y) {
        this.type = type || TileType.grass;
    }

    setTileType(value) {
        this.type = value;
    }
}
