import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <div className="footer-copy">© 2026 Naman Dubey — All rights reserved</div>
        <div className="footer-note">Handcrafted with care in Gwalior, IN</div>
        <div className="footer-links">
          <a href="https://github.com/Naman313" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/naman-dubey-545aa1228/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="https://x.com/NamanDu50483312" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
          <a href="mailto:naman.dubey313@gmail.com" aria-label="Email"><FiMail /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
