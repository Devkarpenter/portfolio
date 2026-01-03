import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Devesh Karpenter</h2>
          <p>Frontend / Full-Stack Developer (React • Next.js • MERN)</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#Projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact & Social */}
        <div className="footer-connect">
          <a href="mailto:deveshkarpenter1998@gmail.com">
            deveshkarpenter1998@gmail.com
          </a>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Devesh Karpenter. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

