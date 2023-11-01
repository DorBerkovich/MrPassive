import { useContext } from "react";
import { UserInfoContext } from "../contexts";

export default function Protfolio() {
  const [userInfo, _] = useContext(UserInfoContext);
  const { name, email } = userInfo;

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>This is your protfolio</p>
    </div>
  );
}
