import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, id, onBtnClick }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={() => onBtnClick(id)}>DEL</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProp) {
  return {
    onBtnClick: (id) => dispatch(actionCreators.deleteToDo(id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
