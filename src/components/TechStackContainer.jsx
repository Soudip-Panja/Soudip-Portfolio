export default function TechStackContainer() {
  const techStack = [
    { name: "HTML5", icon: "https://icon.icepanel.io/Technology/svg/HTML5.svg" },
    { name: "CSS3", icon: "https://icon.icepanel.io/Technology/svg/CSS3.svg" },
    { name: "JavaScript", icon: "https://icon.icepanel.io/Technology/svg/JavaScript.svg" },
    { name: "React", icon: "https://icon.icepanel.io/Technology/svg/React.svg" },
    { name: "Node.js", icon: "https://icon.icepanel.io/Technology/svg/Node.js.svg" },
    { name: "Bootstrap", icon: "https://icon.icepanel.io/Technology/svg/Bootstrap.svg" },
    { name: "Vite", icon: "https://icon.icepanel.io/Technology/svg/Vite.js.svg" },
    { name: "Express", icon: "https://4born.com/assets/image/Express.js-logo.svg" },
    { name: "MongoDB", icon: "https://icon.icepanel.io/Technology/svg/MongoDB.svg" },
    { name: "Mongoose", icon: "https://icon.icepanel.io/Technology/svg/Mongoose.js.svg" },
    { name: "Git", icon: "https://icon.icepanel.io/Technology/svg/Git.svg" },
    { name: "GitHub", icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" },
    { name: "Vercel", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.74.0/files/dark/vercel.png" },
    { name: "Chrome DevTools", icon: "https://icon.icepanel.io/Technology/svg/Chrome.svg" },
    { name: "Postman", icon: "https://icon.icepanel.io/Technology/svg/Postman.svg" },
    { 
      name: "VS Code", 
      icon: "https://icon.icepanel.io/Technology/svg/Visual-Studio-Code-%28VS-Code%29.svg",
      class: "hide-on-desktop" 
    },
  ];

  return (
    <div className="container pb-5" id="tech-stack">
        <h5 className="text-white techStack-heading">"Technologies and tools I use to build seamless web experiences."</h5>
      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <div 
            key={index} 
            className={`tech-card ${tech.class || ''}`}
          >
            <div className="tech-icon-wrapper">
              <div className="tech-icon-glow"></div>
              <img 
                src={tech.icon} 
                alt={tech.name} 
                className="tech-icon" 
                loading="lazy"
              />
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}