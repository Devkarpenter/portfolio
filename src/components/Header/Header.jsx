import { useEffect, useState } from 'react';
import './Header.css';
import { RxHamburgerMenu } from "react-icons/rx";


function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ['home', 'about', 'skills', 'Projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for early highlight
      let currentSection = 'home';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Toggle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {sections.map((section) => (
              <li className="nav__item" key={section}>
                <a
                  href={`#${section}`}
                  className={`nav__link ${activeLink === section ? 'active-link' : ''}`}
                  onClick={handleLinkClick}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Hamburger toggle button */}
        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={toggleMenu}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' ? toggleMenu() : null)}
          aria-label="Toggle menu"
        >
          <RxHamburgerMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
