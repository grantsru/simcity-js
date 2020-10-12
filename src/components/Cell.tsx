import React, { useContext } from 'react';
import styled from 'styled-components';

import {Context, HYDRATE} from "../store";
import Tile from "../models/Tile";

interface CellProps {
  key: string;
  tile: Tile;
}

const StyledTopSpan = styled.span`
  border: 1px solid ${(props: CellProps) => props.tile.cellBackground()};
  &:hover { border: 1px solid yellow };
  ${(props: CellProps) => props.tile.isBuilding() &&  props.tile.electricity.power && `
    &:after {
      content: "⚡";
      font-size: 10px;
      background: white;
      border: 2px solid black;
      transform: translate(30px,-45px);
      position: absolute;
      z-index: 2;
    }
  `};
  ${(props: CellProps) => props.tile.isBuilding() && !props.tile.electricity.power && `
    &:after {
      content: "❌";
      font-size: 10px;
      background: white;
      border: 2px solid black;
      transform: translate(30px,-45px);
      position: absolute;
      z-index: 2;
    }
  `};
`;

const StyledBottomSpan = styled.span`
  ${(props: CellProps) => props.tile.electricity.wired && `
    &:after {
      content: "🔌";
      font-size: 20px;
      transform: translate(24px, -50px);
      position: absolute;
      z-index: 2;
    }
  `};
`;

const StyledCell = styled.div`
  z-index: 1;
  height: 50px;
  width: 50px;
  font-size: 34px;
  text-align: center;
  background: ${(props: CellProps) => props.tile.cellBackground()};
`;

export default function Cell(props: CellProps) {
  const [state, dispatch] = useContext(Context);

  const clickCell = (): void => {
    if (state.activeTool === 'power') props.tile.electricity.wired = true;
    else props.tile.setTileType(state.activeTool);

    dispatch({ type: HYDRATE });
  };

  return (
    <StyledTopSpan onClick={clickCell} {...props}>
      <StyledBottomSpan {...props}>
        <StyledCell {...props}>
          {props.tile.type.icon}
        </StyledCell>
      </StyledBottomSpan>
    </StyledTopSpan>
  );
}
