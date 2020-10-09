import React from 'react';
import styled from 'styled-components';

interface GridProps {
  height: number;
  width: number;
}

const StyledGrid = styled.table`
  border: 2px solid #CCC;
`;

const StyledRow = styled.tr`
  border: 1px solid #CCC;
`;

const StyledCell = styled.td`
  border: 1px solid #CCC;
`;

export default function Grid(props: GridProps) {
  const { height, width } = props;

  return (
    <StyledGrid>
      <tbody>
        {
          [...Array(height).keys()].map(i =>
            <StyledRow key={`row-${i}`}>
              {
                [...Array(width).keys()].map(j =>
                  <StyledCell key={`cell-${j}`}>Test</StyledCell>
                )
              }
            </StyledRow>
          )
        }
      </tbody>
    </StyledGrid>
  )
}
