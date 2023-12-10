import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import {
  Home,
  Protfolio,
  About,
  Contact,
  Login,
  Signup,
  Admin,
  Unauthorized,
  Missing,
} from "./components/mainContent/AllMainContants";
import RequireAuth from "./components/auth/requireAuth";
import RequireAdmin from "./components/auth/RequireAdmin";
import RequireNotAuth from "./components/auth/RequireNotAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route element={<RequireAuth />}>
          <Route path="protfolio" element={<Protfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route element={<RequireAdmin />}>
            <Route path="admin" element={<Admin />} />
          </Route>
        </Route>

        <Route element={<RequireNotAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
