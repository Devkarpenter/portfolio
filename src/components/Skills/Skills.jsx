import "./Skills.css";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // ⬅ slow & premium
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* TAG */}
        <motion.span
          className="skills-tag"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Expertise
        </motion.span>

        {/* TITLE */}
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        {/* GRID */}
        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Frontend */}
          <motion.div className="skill-card" variants={card}>
            <h3>Frontend</h3>
            <p>
              Building modern, responsive, and animated user interfaces with
              performance and UX in mind.
            </p>
            <div className="skill-chips">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Tailwind</span>
              <span>Bootstrap</span>
              <span>JavaScript (ES6+)</span>
              <span>React.js</span>
              <span>Next.js</span>
              <span>Framer Motion</span>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div className="skill-card" variants={card}>
            <h3>Backend</h3>
            <p>
              Designing secure, scalable APIs and managing authentication and
              data flow.
            </p>
            <div className="skill-chips">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>REST APIs</span>
              <span>JWT</span>
              <span>Google OAuth</span>
            </div>
          </motion.div>

          {/* DSA */}
          <motion.div className="skill-card" variants={card}>
            <h3>DSA & Problem Solving</h3>
            <p>
              Strong foundation in data structures and algorithmic thinking for
              optimized solutions.
            </p>
            <div className="skill-chips">
              <span>Arrays</span>
              <span>Strings</span>
              <span>Linked Lists</span>
              <span>Stacks</span>
              <span>Queues</span>
              <span>Trees</span>
              <span>Graphs</span>
              <span>Binary Search</span>
              <span>Two Pointers</span>
              <span>Sliding Window</span>
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div className="skill-card" variants={card}>
            <h3>Tools & Workflow</h3>
            <p>
              Efficient development workflow with version control, testing, and
              deployment tools.
            </p>
            <div className="skill-chips">
              <span>Git</span>
              <span>GitHub</span>
              <span>Vercel</span>
              <span>Postman</span>
              <span>VS Code</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;





