import React, { useReducer } from "react";

const Reducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "PLUS":
        return state.map((data) => {
          if (data.id === action.payload) return { ...data, num: data.num + 1 };
          else return data;
        });
      case "MINUS":
        return state.map((data) => {
          if (data.id === action.payload) return { ...data, num: data.num - 1 };
          else return data;
        });
      case "ADDNUMBER":
        return [...state, { id: Date.now(), num: 0 }];
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, [{ id: 1, num: 1 }]);

  return (
    <>
      <table className="table table-dark table-hover table-bordered border-warning my-5 ">
        <thead>
          <tr>
            <th>minus</th>
            <th>number</th>
            <th>plus</th>
          </tr>
        </thead>
        <tbody>
          {state?.map((v) => (
            <tr key={v.id}>
              <td>
                <button
                  onClick={() => dispatch({ type: "MINUS", payload: v.id })}
                  className="btn w-25 mx-auto btn-danger"
                >
                  -
                </button>
              </td>
              <td>{v.num}</td>
              <td>
                <button
                  onClick={() => dispatch({ type: "PLUS", payload: v.id })}
                  className="btn w-25 mx-auto btn-success"
                >
                  +
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>
              <button
                onClick={() => dispatch({ type: "ADDNUMBER" })}
                className="btn w-25 mx-auto btn-info"
              >
                add number
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Reducer;
