import React, { useContext } from "react";
import { Context } from "../store";

import Grid from "../components/Grid";
import Toolbar from "./Toolbar";

export default function Board() {
  const [state] = useContext(Context);

  return (
    <>
      <Toolbar />
      <Grid gridMap={state.boardMap} />
    </>
  )
}
