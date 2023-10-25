import { Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Login,
  Protfolio,
  Signup,
} from "./content/AllContants";

const ContentRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="protfolio" element={<Protfolio />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default ContentRouts;
