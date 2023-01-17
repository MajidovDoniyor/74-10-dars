import React, { useContext } from "react";
import { reducerData } from "../App";

const ReducerContext = () => {
  const { state, dispatch } = useContext(reducerData);

  return (
    <div>
      <h1>{state}</h1>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: "minus", payload: 10 })}
      >
        -
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: "plus", payload: 11 })}
      >
        +
      </button>
    </div>
  );
};

export default ReducerContext;
