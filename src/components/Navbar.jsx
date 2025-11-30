import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // Logic to handle scroll and set active tab automatically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is within the viewport (adjusted for navbar height)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UPDATED LOGIC: Closes mobile menu safely on click
  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    
    // Check if the menu is currently showing (mobile view)
    const navbarCollapse = document.getElementById("navbarNav");
    const toggler = document.querySelector(".navbar-toggler");

    if (navbarCollapse && navbarCollapse.classList.contains("show") && toggler) {
      // Simulate a click on the toggler to close it properly and reset the icon animation
      toggler.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <h3 className="gradient-text1 mb-0">
            <strong>Soudip</strong>
          </h3>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                href="#home"
                onClick={() => handleNavLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                href="#about"
                onClick={() => handleNavLinkClick("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "portfolio" ? "active" : ""}`}
                href="#portfolio"
                onClick={() => handleNavLinkClick("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                href="#contact"
                onClick={() => handleNavLinkClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}