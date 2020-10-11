import { createContext } from 'react';
import Tile from "../models/Tile";

const grassMap: Tile[][] = [...Array(10)]
    .map((_, x) => [...Array(10)]
        .map((_, y) => new Tile(null, x, y)));

export const initialState = {
  boardMap: grassMap,
  activeTool: 'road',
};

export const HYDRATE = 'HYDRATE';
export const SELECT_TOOL = 'SELECT_TOOL';

export const Reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
      }
    case SELECT_TOOL:
      console.log(action);
      return {
        ...state,
        activeTool: action.payload,
      }
  }
};

export const Context = createContext(initialState);
