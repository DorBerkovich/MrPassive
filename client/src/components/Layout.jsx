import { Outlet } from "react-router-dom";
import { Header, NavBar, Footer } from "./AllComponents";
import { useContext } from "react";
import { authContext } from "../contexts/AuthProvider";
import "./Layout.css"

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
