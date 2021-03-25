import { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Nav() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <nav>
      <nav>
        <Link to="/">Home</Link>| <Link to="/contact">Contact</Link>
        <br></br>
        <br></br>
        {auth ? (
          <>
            <Link to="/admin">AdminPage</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </nav>
  );
}

export default Nav;
