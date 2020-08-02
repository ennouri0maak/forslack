import React from "react";
import MoviesList from "./projectList";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "../src/components/about";
import Contact from "../src/components/contact";
import Navbar from "../src/components/navbar";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MoviesList />

        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>

  );
}




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
