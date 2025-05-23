import './Skills.css';

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Technical Skills</h2>
          <div className="skills__data">
            <div className="skills__names">
              <i className="fa-brands fa-html5 skills__icon"></i>
              <span className="skills__name">HTML5</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <div><span className="skills__percentage">95%</span></div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="fa-brands fa-css3-alt skills__icon"></i>
              <span className="skills__name">CSS3, TAILWINDCSS AND BOOTSTRAP</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <div><span className="skills__percentage">85%</span></div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="fa-brands fa-js skills__icon"></i>
              <span className="skills__name">JAVASCRIPT</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <div><span className="skills__percentage">65%</span></div>
          </div>
          <div className="skills__data">
            <div className="skills__names">
              <i className="fa-brands fa-react skills__icon"></i>
              <span className="skills__name">REACTJS</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            <div><span className="skills__percentage">85%</span></div>
          </div>
        </div>
        <div>
          <img src="/assets/img/work3.jpg" alt="" className="skills__img" />
        </div>
      </div>
    </section>
  );
}
export default Skills;
