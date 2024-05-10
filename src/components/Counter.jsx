import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../redux/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counterReducer);

  const handleIncrementAmount = () => {
    if (amount) {
      dispatch(incrementByAmount(+amount));
    } else {
      alert("Please enter value");
    }
  };
  return (
    <div>
      <h1 className="text-center">Counter App</h1>
      <div style={{ width: "800px" }} className="border p-5 rounded mt-5">
        <h1 style={{ fontSize: "80px" }} className="text-center text-warning">
          {count}
        </h1>
        <div className="d-flex justify-content-around align-items-center  mt-3 w-100">
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-primary"
          >
            DECREMENT
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="btn btn-danger ms-2"
          >
            RESET
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-success ms-2"
          >
            INCREMENT
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-5 w-100">
          <input
            type="text"
            className="form-control"
            placeholder="incremneted Counter App"
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={handleIncrementAmount}
            className="btn btn-primary ms-2"
          >
            INCREMENT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
