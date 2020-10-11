export enum TileType {
    'grass',
    'water',
    'road',
    'residential',
    'industrial',
    'commercial'
}

export const tileIcons = ['🥦', '🌊', '⬛', '🏠', '🏭', '🏢'];

export default class Tile {
    type: TileType;
    x: number;
    y: number;

    constructor(type = null, private readonly x, private readonly y) {
        this.type = type || TileType.grass;
    }

    cellBackground(): string {
        switch (this.type) {
            case TileType.grass:
                return 'green';
            case TileType.water:
                return 'blue';
            case TileType.road:
                return '#383838';
            default:
                return 'white';
        }
    }

    setTileType(value) {
        this.type = value;
    }
}
