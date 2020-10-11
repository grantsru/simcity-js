import React from "react";
import Grid from "../components/Grid";
import Tile from "../models/Tile";

const grassMap: Tile[][] = [...Array(50)]
  .map(() => [...Array(50)]
    .map(() => new Tile()));

export default function Board() {
  return <Grid gridMap={grassMap} />
}
