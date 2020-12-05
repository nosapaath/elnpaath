import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";
import Shop from "./Components/Pages/Shop/Shop";
import Contacts from "./Components/Pages/Contacts/Contacts";
import Home from "./Components/Pages/Home/Home";
import Project from "./Components/Pages/Project/Project.js";
// import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route path="/elnpaath" exact component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={Contacts} />
            <Route path="/project" component={Project} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
