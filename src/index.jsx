import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connection from "./pages/Connection";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import GlobalStyle from "./utils/style/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/connection" element={<Connection />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
