import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Posts from "./components/pages/Posts";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import Events from "./components/pages/Events";
import Stage from "./components/pages/Stage";
import Reports from "./components/pages/Reports";
import Documents from "./components/pages/Documents";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Route>
          <Route path="/" exact component={Home} />
          <Route path="/stage" component={Stage} />
          <Route path="/reports" component={Reports} />
          <Route path="/documents" component={Documents} />
          <Route path="/posts" component={Posts} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/Events" component={Events} />
        </Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;
