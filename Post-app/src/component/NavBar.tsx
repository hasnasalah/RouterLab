import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthoContext";

export default function NavBar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav>
      <NavLink to="/blog">Blog</NavLink>
        {!isAuthenticated && (
           <NavLink to="/login">Login</NavLink>
        )}

        {isAuthenticated && (
          <>
              <NavLink to="/admin">Admin</NavLink>
              <button onClick={logout}>Logout</button>
          </>
        )}
    </nav>
  );
}
