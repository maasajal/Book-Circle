import React, { useContext } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="membership" element={<Membership />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<RequireAuth><AdminNews /></RequireAuth>} /> */}
        <Route
          path="*"
          element={
            <main style={{ padding: "2rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Outlet />

      {/* <Routes>
        <Route exact path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes> */}

      <Footer />
    </div>
  );
};

export default App;
