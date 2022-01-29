import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { add, store, toDoSlice } from "./store";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <h1>hello</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Write todo"
        />
        <button>ADD</button>
      </form>
    </>
  );
}

export default App;
