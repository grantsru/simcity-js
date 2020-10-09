import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';

import { context, reducer, CLICK } from "./store";

function SimCity(): React.FC {
  const [state, dispatch] = useReducer(reducer, useContext(context));

  const clickElement = (): void => {
    console.log('Test.');
    dispatch({ type: CLICK });
  }

  return (
    <context.Provider value={{ state, dispatch }}>
      <button onClick={clickElement} />
    </context.Provider>
  );
}

ReactDOM.render(<SimCity />, document.getElementById('root'));
