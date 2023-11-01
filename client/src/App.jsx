import {
  ContentRouts,
  Footer,
  Header,
  NavBar,
} from "./components/AllComponents";
import { BrowserRouter as Router } from "react-router-dom";
import { UserInfoContext } from "./components/contexts";
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Header />
        <NavBar />
        <ContentRouts />
        <Footer />
      </Router>
    </UserInfoContext.Provider>
  );
}

export default App;
