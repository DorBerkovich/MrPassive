import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./navbar.css";
import { useMemo } from "react";

function NavBar() {
  const { auth } = useAuth();

  const { pathname } = useLocation();
  const currentPage = useMemo(() => {
    switch (pathname) {
      case "/":
        return "home";

      case "/about":
        return "about";

      case "/protfolio":
        return "protfolio";

      case "/contact":
        return "contact";

      case "/login":
        return "login";

      case "/signup":
        return "signup";
    }
  }, [pathname]);

  console.log(currentPage);
  return (
    <nav>
      <Link to="/" className={`link ${currentPage === "home" && "spacial"}`}>
        home
      </Link>
      <Link
        to="/about"
        className={`link ${currentPage === "about" && "spacial"}`}
      >
        about
      </Link>
      {auth?.email ? (
        <>
          <Link
            to="/protfolio"
            className={`link ${currentPage === "protfolio" && "spacial"}`}
          >
            protfolio
          </Link>
          <Link
            to="/contact"
            className={`link ${currentPage === "contact" && "spacial"}`}
          >
            contact
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className={`link ${currentPage === "login" && "spacial"}`}
          >
            login
          </Link>
          <Link
            to="/signup"
            className={`link ${currentPage === "signup" && "spacial"}`}
          >
            signup
          </Link>
        </>
      )}
      {auth?.isAdmin ? (
        <Link to="/admin" className="link">
          admin
        </Link>
      ) : null}
    </nav>
  );
}

export default NavBar;
