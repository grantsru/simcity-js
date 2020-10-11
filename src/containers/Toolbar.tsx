import React, { useContext } from 'react';
import styled from 'styled-components';
import {Context, SELECT_TOOL} from "../store";

import { tileTypes } from "../models/Tile";

const StyledToolbar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 5px;
`;

const StyledToolTile = styled.div`
  height: 50px;
  width: 50px;
  font-size: 32px;
  text-align: center;
  border: ${({isActive}) => isActive ? '5px solid red' : '5px solid white'};
`;

export default function Toolbar() {
    const [state, dispatch] = useContext(Context);

    const selectTool = (i) => {
        dispatch({
            type: SELECT_TOOL,
            payload: tileTypes[i].value,
        })
    }

    return (
        <StyledToolbar>
            {
                tileTypes.map((tool, i) =>
                    <StyledToolTile
                        key={tool.value}
                        isActive={tool.value === state.activeTool}
                        onClick={() => selectTool(i)}
                    >
                        {tool.icon}
                    </StyledToolTile>
                )
            }
        </StyledToolbar>
    );
};
