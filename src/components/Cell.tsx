import React, { useContext } from 'react';
import styled from 'styled-components';

import {Context, HYDRATE} from "../store";

import Tile from "../models/Tile";
import { tileTypes } from "../models/Tile";

interface CellProps {
  key: string;
  tile: Tile;
}

const StyledCell = styled.div`
  height: 50px;
  width: 50px;
  font-size: 34px;
  text-align: center;
  background: ${(props: CellProps) => props.tile.cellBackground()};
`;

export default function Cell(props: CellProps) {
  const [state, dispatch] = useContext(Context);

  const clickCell = (): void => {
    props.tile.setTileType(state.activeTool);
    dispatch({ type: HYDRATE });
  };

  return <StyledCell onClick={clickCell} {...props}>
    {props.tile.type.icon}
  </StyledCell>;
}
