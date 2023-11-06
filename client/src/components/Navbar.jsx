/* eslint-disable no-undef */
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../App";
import { useContext } from "react";

function Navbar() {
  const user = useContext(UserContext);
  const handleClick = () => {
    user.setCurrentUser({ name: '' })
    console.log(user.currentUser)
  }
  return (
    // <h1>Nav</h1>
    <div>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <Link to="/">
            <span className="fw-bold">HulluStore</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item m-3">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item m-3">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav-item m-3">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item m-3">
                <NavLink to="/cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span className="position-relative top-0 start-0 translate-middle badge rounded-pill bg-primary">
                    0
                  </span>
                </NavLink>
              </li>
              {user.currentUser.name !== "" && <li className="nav-item m-3">
                <NavLink to="/user-info">
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </li>}
              {user.currentUser.name !== "" ? <li onClick={handleClick} className="nav-item m-3">
                <NavLink to="/">Logout </NavLink>
              </li> : <li className="nav-item m-3">
                <NavLink to="/login">Login </NavLink>
              </li>}


            </ul>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default Navbar;
