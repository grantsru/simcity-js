import React, { useContext } from 'react';
import styled from 'styled-components';
import {Context, SELECT_TOOL} from "../store";

import { TileType, tileIcons } from "../models/Tile";

const StyledToolbar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StyledToolTile = styled.div`
  height: 50px;
  width: 50px;
  font-size: 32px;
  text-align: center;
`;

export default function Toolbar() {
    const [state, dispatch] = useContext(Context);

    const toolList = [...Array(Object.keys(TileType).length / 2)].map((_, i) => ({
        value: TileType[i],
        icon: tileIcons[i],
        select() {
            dispatch({
                type: SELECT_TOOL,
                payload: TileType[i],
            })
        }
    }));

    return (
        <StyledToolbar>
            {
                toolList.map((tool, i) =>
                    <StyledToolTile
                        key={tool.value}
                        isActive={tool.value === state.activeTool}
                        onClick={tool.select}
                    >
                        {tool.icon}
                    </StyledToolTile>
                )
            }
        </StyledToolbar>
    );
};
