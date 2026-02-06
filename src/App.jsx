import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import SplineScene from "./spline/SplineScene";
import logo from "./image/image.png";



import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetStarted from "./create/GetStarted";
import Discover from "./found/Discover";
import "./App.css";

function Layout() {
  const location = useLocation();

  const currentPath = location.pathname.toLowerCase();

  const hideUI = currentPath === "/get-started" || currentPath === "/discover";

  return (
    <>
      {!hideUI && <SplineScene />}

      {!hideUI && (
        <nav className="navbar">

            <NavLink to="/" className="logo-box">
    <img src={logo} alt="Logo" className="nav-logo" />
             </NavLink>
             
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </NavLink>
        </nav>
      )}

      <div className={`page-container ${hideUI ? "full-screen" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;
