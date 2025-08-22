import './Projects.css';
import work1 from '../../assets/img/work1.jpg';
import work5 from '../../assets/img/work5.jpg';
import work6 from '../../assets/img/work6.jpg';

function Projects() {
  const projects = [
    {
      href: "https://chat-app-blue-tau-81.vercel.app/login",
      img: work1,
      alt: "Chat App",
      title: "Chat App",
      desc: "A real-time chat application built with MERN stack and Socket.io for instant messaging."
    },
    {
      href: "https://www.washniron.com/",
      img: work6,
      alt: "Wash N Iron",
      title: "Wash N Iron",
      desc: "An online laundry service platform that allows users to schedule pickups and deliveries."
    },
    {
      href: "https://web-portal-two.vercel.app/",
      img: work5,
      alt: "Web Portal",
      title: "Web Portal",
      desc: "A multi-role portal built using MERN stack with authentication and dashboard features."
    }
  ];

  return (
    <section className="work section" id="Projects">
      <h2 className="section-title">Projects</h2>
      <div className="work__container">
        {projects.map((p, i) => (
          <a href={p.href} key={i} className="project-card" target="_blank" rel="noopener noreferrer">
            <div className="project-img-container">
              <img src={p.img} alt={p.alt} className="project-img"/>
            </div>
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
