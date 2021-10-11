import React from "react";
import Navbar from "./components/Navigationbar/Navbar";
import SliderOne from "./components/SliderOne";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Home() {
  return (
    <div>
      <SliderOne />
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
