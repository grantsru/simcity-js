import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Board from "./containers/Board";
import { context, reducer, CLICK } from "./store";

function SimCity(): React.FC {
  const [state, dispatch] = useReducer(reducer, useContext(context));

  const clickElement = (): void => {
    dispatch({ type: CLICK });
  }

  return (
    <context.Provider value={{ state, dispatch }}>
      <Board />
    </context.Provider>
  );
}

ReactDOM.render(<SimCity />, document.getElementById('root'));
