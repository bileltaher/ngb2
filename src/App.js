import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Posts from "./components/pages/Posts";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Posts} />
          <Route path="/sign-up" component={SignUp} />
        </Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;
