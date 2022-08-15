import React, { useState } from "react";
import "./Navbar.css";
import {nav} from '../../Data/Data';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">DevLHB</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        {nav.map((item,index)=>(
        <li key={index}>{item}</li>
        ))}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;