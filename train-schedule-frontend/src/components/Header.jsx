import { NavLink, Link } from "react-router-dom";

import logoImg from "../assets/logo.jpeg";

export default function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light shadow navbar">
      <div className="d-flex align-items-center">
        <Link
          to="/"
          className="d-flex align-items-center text-decoration-none navbar-brand"
        >
          <img
            src={logoImg}
            alt="Train Logo"
            width="60"
            height="60"
            className="me-3 rounded-circle"
          />
          <span className="h4 mb-0 text-primary">Happy Journey</span>
        </Link>
      </div>

      <nav className="d-flex gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active text-primary fw-bold" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/add-train"
          className={({ isActive }) =>
            isActive ? "nav-link active text-primary fw-bold" : "nav-link"
          }
        >
          Add Train
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active text-primary fw-bold" : "nav-link"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active text-primary fw-bold" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
