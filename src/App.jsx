import { login, logout } from "./actions/user";
import store from "./store";

function App() {
  const onLogin = () => {
    store.dispatch(login(1));
    console.log(store.getState().user);
  };

  const onLogout = () => {
    store.dispatch(logout());
    console.log(store.getState().user);
  };

  return (
    <>
      <h1>Hello</h1>
      <button onClick={onLogin}>Login</button>
      <button onClick={onLogout}>Logout</button>
      {true ? <h1>You Logged</h1> : <h1>Plz Login ...</h1>}
    </>
  );
}

export default App;
