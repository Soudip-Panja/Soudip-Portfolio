import { ExternalLink, Github } from "lucide-react";

const CardProject = ({
  Img,
  Title,
  Description,
  Link: LiveLink,
  FrontendLink,
  BackendLink,
}) => {
  const handleLiveDemo = (e) => {
    if (!LiveLink) {
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  return (
    <div className="glass-card">
      <div className="glass-overlay"></div>

      <div className="glass-content">
        <div className="glass-img-wrapper">
          <img src={Img} alt={Title} className="glass-img" />
        </div>

        <h3 className="glass-title">{Title}</h3>
        <p className="glass-desc">{Description}</p>

        <div className="glass-footer">
          {LiveLink ? (
            <a
              href={LiveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLiveDemo}
              className="glass-link"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} />
            </a>
          ) : (
            <span style={{ color: "gray", fontSize: "0.875rem" }}>
              Demo Not Available
            </span>
          )}

          <div style={{ display: "flex", gap: "0.5rem" }}>
            {FrontendLink && (
              <a
                href={FrontendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn"
                title="Frontend Code"
              >
                <Github size={16} />
                <span>Frontend</span>
              </a>
            )}

            {BackendLink && (
              <a
                href={BackendLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn"
                title="Backend Code"
              >
                <Github size={16} />
                <span>Backend</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsContainer() {
  const projects = [
    {
      id: 1,
      title: "Quick Cart",
      description:
        "QuickCart is a modern online shopping platform that allows users to explore products, manage carts, and save items to a wishlist. Built with a scalable full-stack architecture, it ensures speed, reliability, and clean UI design.",
      img: "/QuickCart.jpeg",
      link: "https://quick-cart-e-commerce-ten.vercel.app/",
      frontendLink: "https://github.com/Soudip-Panja/QuickCart-Frontend",
      backendLink: "https://github.com/Soudip-Panja/shopping-backend",
    },
    {
      id: 2,
      title: "Zervia CRM App",
      description:
        "Zervia CRM is a complete full-stack CRM solution built with React, offering seamless customer data handling and real-time updates. It provides powerful tools for managing leads, tasks, and analytics in one unified platform.",
      img: "/Zervia.png",
      link: "https://zervia-crm-app.vercel.app/",
      frontendLink: "https://github.com/Soudip-Panja/Zervia-CRM-App",
      backendLink: "https://github.com/Soudip-Panja/Zervia-CRM--Backend-",
    },
  ];

  return (
    <div className="projects-section">
      <div className="row g-4 justify-content-center">
        {projects.map((project) => (
          <div className="col-12 col-lg-6" key={project.id}>
            <CardProject
              Img={project.img}
              Title={project.title}
              Description={project.description}
              Link={project.link}
              FrontendLink={project.frontendLink}
              BackendLink={project.backendLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
