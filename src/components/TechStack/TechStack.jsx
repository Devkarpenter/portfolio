import "./TechStack.css";
import {
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

function TechStack() {
  const techs = [
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <TbBrandFramerMotion />, name: "Framer Motion" },
  ];

  return (
    <section className="tech-stack section">
      <div className="tech-container">
        <h2 className="section-title">Tech Stack</h2>

        <div className="marquee">
          <div className="marquee-track">
            {[...techs, ...techs].map((tech, index) => (
              <div className="tech-item" key={index}>
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;

