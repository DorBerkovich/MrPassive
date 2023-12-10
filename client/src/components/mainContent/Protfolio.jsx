import { useContext } from "react";
import { authContext } from "../../contexts/AuthProvider";
import useAuth from "../../hooks/useAuth";

export default function Protfolio() {
  const { auth } = useAuth();

  console.log("name:", auth.name);
  return (
    <div>
      <h1>Hello {auth.name}</h1>
      <p>This is your protfolio</p>
    </div>
  );
}
