import React from "react";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ProjectDetail from "./components/ProjectDetail";

const App = () => {
  return (
    <>
      <div className="navbar fixed flex items-center justify-between top-0 left-0 z-[100] h-[8vh] w-full px-[3vw] ">
        <div className="name">
          <Link to="/">
            <h3 className="text-[2.1rem] font-[500] uppercase">Swaraj Singh</h3>
          </Link>
        </div>
        <div className="aboutLink">
          <Link to="/about">
            <h3 className="text-[2.1rem] cursor-pointer font-[600] uppercase">
              ABOUT
            </h3>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <div className="footer relative z-[100] px-[3vw] flex items-center justify-between h-[10vh] w-full">
        <div className="copyright">
          <h3 className="text-[1.7rem] uppercase font-[480]">
            @2026 Swaraj Singh
          </h3>
        </div>
        <div className="contactInfo w-[45%] flex  items-center justify-between h-full ">
          <div className="socials">
            <h3 className="text-[1.5rem] leading-[1.3] font-[500]">
              Instagram
            </h3>
            <h3 className="text-[1.5rem] leading-[1.3] font-[500]">LinkedIn</h3>
            <h3 className="text-[1.5rem] leading-[1.3] font-[500]">Github</h3>
            <h3 className="text-[1.5rem] leading-[1.3] font-[500]">Awwwards</h3>
          </div>
          <div className="email">
            <h3 className="text-[1.7rem] font-[450]">
              Any Project ? or Collabration ?
            </h3>
            <h4 className="text-[1.8rem] font-[600]">swarajsingh@gmail.com</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
