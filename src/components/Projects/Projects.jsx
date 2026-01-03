import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Trolley E-Commerce Website",
      link: "https://trolley-web.vercel.app/",
      stack: ["Next.js", "MongoDB", "JWT", "Google Auth", "Framer Motion"],
      bullets: [
        "Developed a full-stack e-commerce trolley application using Next.js.",
        "Implemented Google authentication and JWT-based secure authorization.",
        "Built backend APIs and integrated MongoDB for data persistence.",
        "Implemented cart functionality, protected routes, and user sessions.",
        "Added smooth animations and transitions using Framer Motion."
      ]
    },
    {
      title: "Real-Time Chat Application",
      link: "https://chat-app-blue-tau-81.vercel.app/login",
      stack: ["React.js", "Supabase", "Real-time", "Vercel"],
      bullets: [
        "Built a real-time chat application to enable instant messaging between users.",
        "Implemented real-time messaging using Supabase backend services.",
        "Handled authentication and protected routes for secure access.",
        "Deployed the application on Vercel with GitHub integration."
      ]
    },
    {
      title: "Wash N Iron (Client UI Project)",
      link: "https://www.washniron.com/",
      stack: ["React.js", "Tailwind CSS", "Responsive UI"],
      bullets: [
        "Developed a clean and responsive frontend UI for a laundry service platform.",
        "Built reusable components using React.js and Tailwind CSS.",
        "Focused on mobile responsiveness and user-friendly design.",
        "Delivered the project as a frontend-only solution for a client."
      ]
    },
    
  ];

  return (
    <section className="projects section" id="Projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects__container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-header">
              <h3>{p.title}</h3>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                Live Demo →
              </a>
            </div>

            <div className="project-stack">
              {p.stack.map((tech, idx) => (
                <span key={idx} className="stack-pill">{tech}</span>
              ))}
            </div>

            <ul className="project-points">
              {p.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;



