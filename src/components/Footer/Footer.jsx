import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Name & Tagline */}
        <div className="footer-brand">
          <h2 className="footer-title">Devesh Karpentar</h2>
          <p className="footer-subtitle">Frontend Developer | MERN Stack</p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="#" className="footer-icon" aria-label="Facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="footer-icon" aria-label="Instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="footer-icon" aria-label="Twitter">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <b>Contact Me</b>
          <p>deveshkarpenter1998@gmail.com</p>
          <p>8109616857</p>
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Devesh Karpentar. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
