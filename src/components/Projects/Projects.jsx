import "./Projects.css";
import { motion } from "framer-motion";
import trolleyImg from "../../assets/projects/trolley.png";
import chatImg from "../../assets/projects/chat.png";
import washImg from "../../assets/projects/washiron.png";

/* Slower stagger for text */
const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18, // ⬅ slower
      delayChildren: 0.2,
    },
  },
};

/* Slower text reveal */
const textItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Projects() {
  const projects = [
    {
      title: "Trolley E-Commerce Website",
      image: trolleyImg,
      link: "https://trolley-web.vercel.app/",
      description:
        "A full-stack e-commerce platform focused on performance, security, and clean user experience. The project handles real-world features such as authentication, cart management, and protected routes while maintaining smooth UI interactions.",
      stack: ["Next.js", "MongoDB", "JWT", "Google Auth", "Framer Motion"],
      bullets: [
        "Built scalable frontend architecture using Next.js.",
        "Implemented Google OAuth and JWT-based authentication.",
        "Designed secure backend APIs with MongoDB integration.",
        "Developed cart system with protected user sessions.",
        "Enhanced UX using smooth, subtle animations."
      ]
    },
    {
      title: "Real-Time Chat Application",
      image: chatImg,
      link: "https://chat-app-blue-tau-81.vercel.app/login",
      description:
        "A modern real-time chat application enabling instant communication. The project emphasizes secure authentication, real-time updates, and a clean, distraction-free interface.",
      stack: ["React.js", "Supabase", "Real-time", "Vercel"],
      bullets: [
        "Implemented real-time messaging using Supabase subscriptions.",
        "Handled authentication and route protection.",
        "Designed minimal and responsive chat UI.",
        "Deployed using Vercel with GitHub CI/CD."
      ]
    },
    {
      title: "Wash N Iron (Client Project)",
      image: washImg,
      link: "https://www.washniron.com/",
      description:
        "A production-ready frontend for a laundry service platform. The focus was on clean design, mobile-first responsiveness, and clear information hierarchy for real users.",
      stack: ["React.js", "Tailwind CSS", "Responsive UI"],
      bullets: [
        "Designed modern UI aligned with brand identity.",
        "Built reusable React components using Tailwind CSS.",
        "Optimized layouts for mobile and tablet screens.",
        "Delivered a client-ready frontend solution."
      ]
    }
  ];

  return (
    <section className="projects-vertical" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        {projects.map((p, i) => (
          <div className="project-row" key={i}>

            {/* IMAGE – VERY SLOW SLIDE */}
            <motion.div
              className="project-image-wrapper"
              initial={{ opacity: 0, x: i % 2 === 0 ? -160 : 160 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <img src={p.image} alt={p.title} />
            </motion.div>

            {/* TEXT – SLOW LINE BY LINE */}
            <motion.div
              className="project-info"
              variants={textContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h3 variants={textItem}>{p.title}</motion.h3>

              <motion.p className="project-desc" variants={textItem}>
                {p.description}
              </motion.p>

              <motion.div className="project-stack" variants={textItem}>
                {p.stack.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </motion.div>

              <motion.ul className="project-points">
                {p.bullets.map((b, idx) => (
                  <motion.li
                    key={idx}
                    variants={textItem}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.12, // ⬅ slower bullets
                      ease: "easeOut",
                    }}
                  >
                    {b}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                variants={textItem}
              >
                View Live Project →
              </motion.a>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;






