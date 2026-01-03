import './Skills.css';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container">

        {/* Frontend */}
        <div className="skills__block">
          <h3 className="skills__subtitle">Frontend Development</h3>

          <div className="skills__row">
            <span>HTML5</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>CSS3 / Tailwind / Bootstrap</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>JavaScript (ES6+)</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>React.js</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>Next.js</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>Framer Motion</span>
            <div className="skills__dots"></div>
          </div>
        </div>

        {/* Backend */}
        <div className="skills__block">
          <h3 className="skills__subtitle">Backend Development</h3>

          <div className="skills__row">
            <span>Node.js & Express.js</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>MongoDB</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>REST APIs</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>Authentication (JWT / Google OAuth)</span>
            <div className="skills__dots"></div>
          </div>
        </div>

        {/* DSA */}
        <div className="skills__block">
          <h3 className="skills__subtitle">Data Structures & Algorithms</h3>

          <div className="skills__row">
            <span>Arrays & Strings</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>Linked Lists</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>Stacks & Queues</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>Trees & Binary Trees</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>Basic Graphs</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>Binary Search / Two Pointers / Sliding Window</span>
            <div className="skills__dots"></div>
          </div>
        </div>

        {/* Tools */}
        <div className="skills__block">
          <h3 className="skills__subtitle">Tools & Workflow</h3>

          <div className="skills__row">
            <span>Git & GitHub</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>Vercel / Deployment</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>Postman</span>
            <div className="skills__dots"></div>
          </div>

          <div className="skills__row">
            <span>VS Code</span>
            <div className="skills__dots"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;




