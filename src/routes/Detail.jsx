import { connect } from "react-redux";
import { Link, useMatch, useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const match = useMatch("/:id");
  const toDoText = toDos.find((todo) => todo.id === Number(match.params.id));

  return (
    <>
      <h1>Detail</h1>
      <h5>
        {toDoText?.text ? (
          toDoText?.text
        ) : (
          <Link to="/">
            <h1>go back</h1>
          </Link>
        )}
      </h5>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
