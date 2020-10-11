export enum TileType {
    'grass',
    'water',
    'road',
    'residential',
    'industrial',
    'commercial'
}

export const tileIcons = ['🥦', '🌊', '🚦', '🏠', '🏭', '🏢'];

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
                return 'yellowgreen';
            case TileType.water:
                return 'dodgerblue';
            case TileType.road:
                return '#383838';
            case TileType.residential:
                return 'green';
            case TileType.industrial:
                return 'yellow';
            case TileType.commercial:
                return 'blue';
            default:
                return 'white';
        }
    }

    setTileType(value) {
        this.type = value;
    }
}
