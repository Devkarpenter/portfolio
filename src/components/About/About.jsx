import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Title */}
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* About Card */}
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="about__subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'm <span>Devesh Karpentar</span>
          </motion.h3>

          <motion.p
            className="about__text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I am a passionate and detail-oriented web developer with a strong
            focus on building modern, responsive, and scalable web applications.
            I specialize in React, Next.js, and the MERN stack, crafting clean UI,
            smooth user experiences, and performance-focused interfaces.
            I enjoy transforming complex requirements into elegant and reliable
            digital solutions.
          </motion.p>

          {/* Tech Pills */}
          <motion.div
            className="about-tags"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span>React</span>
            <span>Next.js</span>
            <span>MERN Stack</span>
            <span>UI/UX</span>
            <span>Framer Motion</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;

