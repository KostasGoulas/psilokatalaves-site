import React from "react";
import './Header.css';

function Header() {
    return (
    <header className="header">
        <div className="logo">Psilokatalaves.gr</div>
        <nav className="header-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
  );
}

export default Header;