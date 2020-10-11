import React from 'react';
import styled from 'styled-components';

import Cell from './Cell';

interface GridProps {
  gridMap: any[];
}

const StyledGrid = styled.div`
  background: white;
`;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export default function Grid(props: GridProps) {
  const { gridMap } = props;

  return (
    <StyledGrid>
      {
        gridMap.map((gridRow, i) =>
          <StyledRow key={`row-${i}`}>
            {
              gridRow.map((gridCell, j) =>
                <Cell key={`cell-${j}`} x={i} y={j} type={gridCell.type} />
              )
            }
          </StyledRow>
        )
      }
    </StyledGrid>
  )
}
