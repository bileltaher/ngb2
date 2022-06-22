import React, { useMemo, useState } from "react";
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
import SignInSide from "./components/pages/Login";
import { UserContext } from "./services/UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />

          <Route>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={SignInSide} />
            <Route path="/stage" component={Stage} />
            <Route path="/reports" component={Reports} />
            <Route path="/documents" component={Documents} />
            <Route path="/posts" component={Posts} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/Events" component={Events} />
          </Route>
          <Footer />
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
