import React from 'react';
import styled from 'styled-components';

import { TileType } from "../models/Tile";

interface CellProps {
  x: number;
  y: number;
  key: string;
  type: string;
}

const cellBackground = (props: CellProps): string => {
  switch (props.type) {
    case TileType.grass:
      return 'green';
    case TileType.water:
      return 'blue';
    default:
      return 'white';
  }
}

const StyledCell = styled.div`
  height: 10px;
  width: 10px;
  background: ${cellBackground};
`;

export default function Cell(props: CellProps) {
  const clickCell = (): void => {
  }

  return <StyledCell onClick={clickCell} {...props} />;
}
