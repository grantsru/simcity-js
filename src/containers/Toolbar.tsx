import React, { useContext } from 'react';
import styled from 'styled-components';
import {Context, SELECT_TOOL} from "../store";

import { TileType } from "../models/Tile";

const StyledToolbar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export default function Toolbar() {
    const [, dispatch] = useContext(Context);

    const selectTool = (e) => {
        dispatch({
            type: SELECT_TOOL,
            payload: e.target.innerText,
        })
    }

    return (
        <StyledToolbar>
            {
                [...Array(Object.keys(TileType).length / 2)].map((_, i) =>
                    <div key={TileType[i]} onClick={selectTool}>{TileType[i]}</div>
                )
            }
        </StyledToolbar>
    );
};
