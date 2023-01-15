import React, { useState } from "react";

const HardCounter = () => {
  const [state, setstate] = useState([
    { id: 1, num: 1 },
    { id: 2, num: 5 },
  ]);

  const PlusNum = (id) => {
    setstate((data) => {
      return data.map((item) => {
        if (item.id === id) {
          return { ...item, num: item.num + 1 };
        } else {
          return { ...item };
        }
      });
    });
  };
  const MinusNum = (id) => {
    setstate((data) => {
      return data.map((item) => {
        if (item.id === id) {
          return { ...item, num: item.num - 1 };
        } else {
          return { ...item };
        }
      });
    });
  };
  const AddNum = () => {
    setstate((data) => {
      return [...data, { id: Date.now(), num: 0 }];
    });
  };
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
                  onClick={() => MinusNum(v.id)}
                  className="btn w-25 mx-auto btn-danger"
                >
                  -
                </button>
              </td>
              <td>{v.num}</td>
              <td>
                <button
                  onClick={() => PlusNum(v.id)}
                  className="btn w-25 mx-auto btn-success"
                >
                  +
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>
              <button onClick={AddNum} className="btn w-25 mx-auto btn-info">
                add number
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default HardCounter;
