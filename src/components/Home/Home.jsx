import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="home__data"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="home__title">
            Hi,<br />
            I'm <span className="home__title-color">Devesh Karpenter</span>
          </h1>

          <motion.h2
            className="home__role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Frontend / Full-Stack Web Developer
          </motion.h2>

          <motion.a
            href="#contact"
            className="home-btn"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* RIGHT SOCIAL */}
        <motion.div
          className="home__social"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/devesh-karpentar-975309255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a href="mailto:deveshkarpenter1998@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>

          <a
            href="https://github.com/Devkarpenter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;
