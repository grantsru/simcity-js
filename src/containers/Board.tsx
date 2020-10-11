import React from 'react';
import Grid from "../components/Grid";

const grassMap = [
  [
    { type: 'grass' },
    { type: 'grass' },
    { type: 'water' },
    { type: 'water' },
    { type: 'grass' },
  ],
  [
    { type: 'grass' },
    { type: 'water' },
    { type: 'water' },
    { type: 'water' },
    { type: 'grass' },
  ],
  [
    { type: 'grass' },
    { type: 'water' },
    { type: 'water' },
    { type: 'water' },
    { type: 'grass' },
  ],
  [
    { type: 'grass' },
    { type: 'water' },
    { type: 'water' },
    { type: 'water' },
    { type: 'grass' },
  ],
  [
    { type: 'grass' },
    { type: 'grass' },
    { type: 'grass' },
    { type: 'grass' },
    { type: 'grass' },
  ],
];

export default function Board() {
  return <Grid gridMap={grassMap} />
}
