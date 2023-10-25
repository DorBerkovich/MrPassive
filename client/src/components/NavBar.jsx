import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (

      <div>
        <Link to="/">home-</Link>
        <Link to="/protfolio">protfolio-</Link>
        <Link to="/about">about-</Link>
        <Link to="/contact">contact-</Link>
        <Link to="/login">login-</Link>
        <Link to="/signup">signup</Link>
        <Link to="/admin">admin</Link>
      </div>
    
  );
}

export default NavBar;
