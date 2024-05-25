import React from 'react';
import Logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
          <a href="#" className="logo">
      <img src={Logo} alt="Dinomite Logo" className="logo-img" />
    </a>
    </nav>
  );
};

export default Navbar;
