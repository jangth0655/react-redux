import { useDispatch, useSelector } from "react-redux";
import { asyncLogin, logout } from "./actions/user";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(user);
  const onLogin = () => {
    dispatch(
      asyncLogin({
        id: "zerocho",
        password: "secret",
      })
    );
  };

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <h1>Hello</h1>
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogout}>Logout</button>
      {user.isLoggingIn ? <h1>You Logged</h1> : <h1>Plz Login ...</h1>}
    </>
  );
}

export default App;
