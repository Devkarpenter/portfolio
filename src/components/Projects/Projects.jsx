import './Projects.css';
import work1 from '../../assets/img/work1.jpg';
import work5 from '../../assets/img/work5.jpg';
import work6 from '../../assets/img/work6.jpg';


function Projects() {
  return (
    <section className="work section" id="Projects">
      <h2 className="section-title">Projects</h2>
      <div className="work__container bd-grid">
        <a href="https://chat-app-blue-tau-81.vercel.app/login" className="work__img">
          <img src={work1} alt="Chat App" />
          <p className='pro-name'>Chat App</p>
        </a>
        <a href="https://www.washniron.com/" className="work__img">
          <img src={work6} alt="Edunify" />
          <p className='pro-name'>Wash N Iron</p>
        </a>
        <a href="https://web-portal-two.vercel.app/" className="work__img">
          <img src={work5} alt="MERN Project" />
          <p className='pro-name'>Web Portal</p>
        </a>
      </div>
    </section>
  );
}
export default Projects;
