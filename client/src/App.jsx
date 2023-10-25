import { ContentRouts, Footer, Header, NavBar } from "./components/AllComponents";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <ContentRouts />
      <Footer />
    </Router>
  );
}

export default App;
