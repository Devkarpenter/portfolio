import { useEffect, useState } from "react";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["home", "about", "skills", "Projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      let currentSection = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo / Name */}
        <div className="nav-logo">DK</div>

        {/* Menu */}
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${
                    activeLink === section ? "active" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger */}
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu />
        </button>
      </nav>
    </header>
  );
}

export default Header;

