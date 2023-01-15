import React, { useReducer, useState } from "react";

const ToDoUp = () => {
  const [fullname, setfullname] = useState("");
  const [telphone, settelphone] = useState("");
  const [edit, setedit] = useState(-1);
  const reducer = (state, action) => {
    switch (action.type) {
      case "SEND":
        return [...state, action.payload];
      case "SAVE":
        return state.map((data) => {
          if (data.id === action.payload) return { ...data, save: !data.save };
          else return data;
        });
      case "DELETE":
        return state.filter((data) => data.id !== action.payload);
      case "EDIT":
        return state.map((data) => {
          if (data.id === action.payload.id) {
            return {
              ...data,
              fullname: action.payload.fullname,
              telphone: action.payload.telphone,
            };
          } else return data;
        });
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, [
    { id: 1, fullname: "doniyor", telphone: "998855", save: true },
    { id: 2, fullname: "anvar", telphone: "0548", save: false },
    { id: 3, fullname: "sarvar", telphone: "48756", save: true },
  ]);
  const SendData = () => {
    if (edit > 0) {
      dispatch({
        type: "EDIT",
        payload: {
          id: edit,
          fullname: fullname,
          telphone: telphone,
        },
      });
      setedit(-1);
    } else {
      dispatch({
        type: "SEND",
        payload: {
          id: Date.now(),
          fullname: fullname,
          telphone: telphone,
          save: false,
        },
      });
    }
    setfullname("");
    settelphone("");
  };
  const Edit = (data) => {
    setedit(data.id);
    setfullname(data.fullname);
    settelphone(data.telphone);
  };
  return (
    <>
      <div className="row my-5">
        <div className="col-4 offset-4">
          <input
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            type="text"
            className="form-control"
            placeholder="name"
          />
          <input
            value={telphone}
            onChange={(e) => settelphone(e.target.value)}
            type="text"
            className="form-control my-4"
            placeholder="telphone"
          />
          <button onClick={SendData} className="btn btn-success w-100">
            send
          </button>
        </div>
        <div className="col-8 offset-2">
          <table className="table table-dark table-bordered border-warning my-5 ">
            <thead>
              <tr>
                <th>full name</th>
                <th>telphone</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {state?.map((v) => (
                <tr key={v.id}>
                  <td className={v.save ? "bg-secondary" : ""}>{v.fullname}</td>
                  <td className={v.save ? "bg-secondary" : ""}>{v.telphone}</td>
                  <td className={v.save ? "bg-secondary" : ""}>
                    <button
                      onClick={() => Edit(v)}
                      className="btn w-25  btn-success"
                    >
                      edit
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: "DELETE", payload: v.id })
                      }
                      className="btn w-25 mx-4 btn-danger"
                    >
                      delete
                    </button>
                    <button
                      onClick={() => dispatch({ type: "SAVE", payload: v.id })}
                      className="btn w-25  btn-primary"
                    >
                      save
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ToDoUp;
