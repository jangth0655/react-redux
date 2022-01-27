import { useState } from "react";
import { connect } from "react-redux";

import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    addToDo(text);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Write todo"
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <ToDo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state, ownProp) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProp) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
