import { createContext } from 'react';

export const CLICK = Symbol('CLICK');

export const reducer = (state, action) => {
  switch (action.type) {
    case CLICK:
      console.log('Clicked.');
      return {
        ...state,
      }
  }
};

export const context = createContext({});
