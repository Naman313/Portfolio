import React, { useState } from "react";
import { FiMoon, FiMenu, FiX } from "react-icons/fi";
import resumePdf from "../Assets/Naman_Dubey.pdf";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="topbar">
      <div className="nav-shell">
        <a href="#home" className="brand-mark" aria-label="Naman Dubey home">
          <span>NAMAN</span>
          <span className="brand-dot">.</span>
        </a>

        <nav className={`nav-panel ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link-item"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={resumePdf} target="_blank" rel="noreferrer" className="theme-button small-link">
            Resume
          </a>
          <button type="button" className="theme-button" aria-label="Toggle theme">
            <FiMoon />
          </button>
          <button
            type="button"
            className="menu-button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
