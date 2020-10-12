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
  { value: 'power', icon: '🔌', cost: 50 },
];

export default class Tile {
  x: number;

  y: number;

  type: TileType;

  electricity = {
    wired: false,
    power: false,
  }

  constructor(type, private readonly x, private readonly y) {
    this.type = type;
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

  isBuilding() {
    return this.type.value === 'residential'
      || this.type.value === 'industrial'
      || this.type.value === 'commercial';
  }

  setTileType(value: string) {
    for (let i = 0; i < tileTypes.length; i += 1) {
      if (tileTypes[i].value === value) {
        this.type = tileTypes[i];
        break;
      }
    }
  }
}
