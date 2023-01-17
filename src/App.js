import React, { createContext, useReducer } from "react";
import Game from "./roots/Game";
import HardCounter from "./roots/HardCounter";
import Reducer from "./roots/Reducer";
import ReducerContext from "./roots/ReducerContext";
import ToDoUp from "./roots/ToDoUp";

export const reducerData = createContext();

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "minus":
        return state - action.payload;
      case "plus":
        return state + action.payload;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, 1);
  return (
    <div className="container">
      <HardCounter />
      {/* <Reducer /> */}
      {/* <ToDoUp /> */}
      {/* <Game /> */}
      <reducerData.Provider value={{ state, dispatch }}>
        <ReducerContext />
      </reducerData.Provider>
    </div>
  );
};

export default App;
