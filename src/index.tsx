import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Board from './containers/Board';
import { Context, Reducer } from './store';

function SimCity() {
  const [state, dispatch] = useReducer(Reducer, useContext(Context));

  return (
    <Context.Provider value={[state, dispatch]}>
      <Board />
    </Context.Provider>
  );
}

ReactDOM.render(<SimCity />, document.getElementById('root'));
