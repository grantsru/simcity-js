import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../store";

import Grid from "../components/Grid";
import Toolbar from "./Toolbar";

const StyledBoard = styled.div`
  padding: 5px;
`;

export default function Board() {
  const [state] = useContext(Context);

  return (
    <StyledBoard>
      <Toolbar />
      <Grid gridMap={state.boardMap} />
    </StyledBoard>
  )
}
