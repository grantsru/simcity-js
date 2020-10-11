import React from 'react';
import styled from 'styled-components';

interface CellProps {
  x: number;
  y: number;
  key: string;
  type: string;
}

const cellBackground = (props: CellProps): string => {
  switch (props.type) {
    case 'grass':
      return 'green';
    case 'water':
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
    console.log(props.x, props.y, props.type);
  }

  return <StyledCell onClick={clickCell} {...props} />;
}
