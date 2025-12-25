import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthoContext";
import "../app.css";

export default function NavBar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
  <div className="nav-links">
    <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>

    {!isAuthenticated && (
      <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
    )}

    {isAuthenticated && (
      <>
        <NavLink to="/admin" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Admin</NavLink>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </>
    )}
  </div>
</nav>

  );
}
