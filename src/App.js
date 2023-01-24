import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

import Signup from "./Signup";
import Signin from "./Signin";

export default function App() {
  const [loginstate, setLoginState] = useState(false);
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </>
    </Router>
  );
}
