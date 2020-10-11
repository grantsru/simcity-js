import React, { useContext } from 'react';
import styled from 'styled-components';

import {Context, HYDRATE} from "../store";

import Tile from "../models/Tile";
import { TileType } from "../models/Tile";

interface CellProps {
  key: string;
  tile: Tile;
}

const cellBackground = (props: CellProps): string => {
  switch (props.tile.type) {
    case TileType.grass:
      return 'green';
    case TileType.water:
      return 'blue';
    case TileType.road:
      return 'darkslategray';
    default:
      return 'white';
  }
}

const StyledCell = styled.div`
  height: 50px;
  width: 50px;
  background: ${cellBackground};
`;

export default function Cell(props: CellProps) {
  const [state, dispatch] = useContext(Context);

  const clickCell = (): void => {
    props.tile.setTileType(TileType[state.activeTool]);
    dispatch({ type: HYDRATE });
  };

  return <StyledCell onClick={clickCell} {...props} />;
}
