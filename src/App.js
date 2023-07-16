import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Programms from "./components/pages/Programms";
import NoPage from "./components/pages/NoPage";
import Gallery from "./components/pages/Gallery";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Programs" element={<Programms />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contacts" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
