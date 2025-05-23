import './Projects.css';

function Projects() {
  return (
    <section className="work section" id="Projects">
      <h2 className="section-title">Projects</h2>
      <div className="work__container bd-grid">
        <a href="https://chat-app-blue-tau-81.vercel.app/login" className="work__img">
          <img src="src/assets/img/work1.jpg" alt="Chat App" />
          <p className='pro-name'>Chat App</p>
        </a>
        <a href="https://school-list-app.vercel.app/" className="work__img">
          <img src="./src/assets/img/work6.jpg" alt="Edunify" />
          <p className='pro-name'>Edunify School Management</p>
        </a>
        <a href="https://github.com/Devkarpenter/MERN-project" className="work__img">
          <img src="src/assets/img/work5.jpg" alt="MERN Project" />
          <p className='pro-name'>MERN Project</p>
        </a>
      </div>
    </section>
  );
}
export default Projects;
