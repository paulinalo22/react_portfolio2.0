import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/mahir_portfolio_react/" component={Home} />
        <Route exact path="/mahir_portfolio_react/about" component={About} />
        <Route exact path="/mahir_portfolio_react/portfolio" component={Portfolio} />
        <Route path="/mahir_portfolio_react/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
