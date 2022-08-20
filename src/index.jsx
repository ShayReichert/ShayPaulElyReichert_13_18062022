import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Connection from "./pages/Connection";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import GlobalStyle from "./utils/style/GlobalStyle";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/connection" element={<Connection />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>
);
