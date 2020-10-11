export interface TileType {
    value: string;
    icon: string;
    cost: number;
}

export const tileTypes: TileType[] = [
    { value: 'grass', icon: '🌲', cost: 50 },
    { value: 'water', icon: '🌊', cost: 50 },
    { value: 'road', icon: '🚦', cost: 50 },
    { value: 'residential', icon: '🏠', cost: 50 },
    { value: 'industrial', icon: '🏭', cost: 50 },
    { value: 'commercial', icon: '🏢', cost: 50 },
    { value: 'reactor', icon: '☢️', cost: 50 },
    { value: 'power', icon: '⚡', cost: 50 },
];

export default class Tile {
    x: number;
    y: number;
    type: TileType;
    powered: boolean;

    constructor(type, private readonly x, private readonly y) {
        this.type = type;
        this.powered = false;
    }

    cellBackground(): string {
        switch (this.type.value) {
            case 'grass':
                return 'yellowgreen';
            case 'water':
                return 'dodgerblue';
            case 'road':
                return 'dimgray';
            case 'residential':
                return 'green';
            case 'industrial':
                return 'yellow';
            case 'commercial':
                return 'blue';
            case 'reactor':
                return 'red';
            default:
                return 'white';
        }
    }

    setTileType(value: string) {
        for (const type of tileTypes) {
            if (type.value === value) {
                this.type = type;
                break;
            }
        }
    }
}
