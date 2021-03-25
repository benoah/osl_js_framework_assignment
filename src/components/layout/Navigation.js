import { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { BrowserRouter as NavLink, Link } from "react-router-dom";

function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React CA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>{" "}
            <Link className="nav-link" to="/contact">
              Contact
            </Link>{" "}
            {auth ? (
              <>
                <Link className="nav-link" to="/admin">
                  AdminPage
                </Link>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
