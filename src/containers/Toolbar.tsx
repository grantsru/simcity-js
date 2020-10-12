import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context, SELECT_TOOL } from '../store';

import { tileTypes } from '../models/Tile';

const actionTypes = [
  {
    action: 'play',
    icon: '🟢',
  },
  {
    action: 'pause',
    icon: '🔴',
  },
  {
    action: 'save',
    icon: '💾',
  },
];

const StyledToolbar = styled.div`
  position: fixed;
  background: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 5px 0;
  margin-bottom: 5px;
  border-bottom: 1px solid grey;
  width: 100vw;
  z-index: 10;
`;

const StyledToolSection = styled.div`
  display: flex;
`;

const StyledToolTile = styled.div`
  height: 50px;
  width: 50px;
  font-size: 32px;
  text-align: center;
  cursor: pointer;
  border: ${({ isActive }) => (isActive ? '5px solid red' : '5px solid white')};
`;

export default function Toolbar() {
  const [state, dispatch] = useContext(Context);

  const selectTool = (i) => {
    dispatch({
      type: SELECT_TOOL,
      payload: tileTypes[i].value,
    });
  };

  return (
    <StyledToolbar>
      <StyledToolSection>
        {
          actionTypes.map((action) => (
            <StyledToolTile>
              {action.icon}
            </StyledToolTile>
          ))
        }
      </StyledToolSection>
      <StyledToolSection>
        {
          tileTypes.map((tool, i) => (
            <StyledToolTile
              key={tool.value}
              isActive={tool.value === state.activeTool}
              onClick={() => selectTool(i)}
            >
              {tool.icon}
            </StyledToolTile>
          ))
        }
      </StyledToolSection>
      <StyledToolSection />
    </StyledToolbar>
  );
}
