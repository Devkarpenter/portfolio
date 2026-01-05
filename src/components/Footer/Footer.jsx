import "./Footer.css";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Brand */}
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Devesh Karpenter</h2>
          <p>Frontend / Full-Stack Developer (React • Next.js • MERN)</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="footer-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {["Projects", "Skills", "Contact"].map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase()}`}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact & Social */}
        <motion.div
          className="footer-connect"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="mailto:deveshkarpenter1998@gmail.com">
            deveshkarpenter1998@gmail.com
          </a>

          <div className="footer-social">
            <motion.a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <p>© {new Date().getFullYear()} Devesh Karpenter. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}

export default Footer;




