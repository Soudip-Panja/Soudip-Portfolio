import { useState } from "react";
import { Sparkles, CodeXml, MessageSquareQuote, Layers } from "lucide-react";
import ProjectsContainer from "../components/ProjectsContainer";
import BlogsContainer from "../components/BlogsContainer";
import TechStackContainer from "../components/TechStackContainer";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");
  return (
    <>
      <section id="portfolio">
        <div className="py-5">
          <div className="text-center">
            <h1 className="display-3 fw-bold lh-1 gradient-text3">
              Portfolio Showcase
            </h1>
            <div className="d-flex justify-content-center align-items-center gap-3 py-3">
              <Sparkles color="#8254d9" size={30} />
              <p className="portfolio-caption m-0 text-center">
                Explore my projects, blogs and technical expertise. Each section
                represents a milestone in my continuous learning path.
              </p>
              <Sparkles color="#8254d9" size={30} />
            </div>
          </div>

          {/* Tab Buttons Section */}
          <div className="d-flex justify-content-center mt-4">
            <div className="toggle-container">
              <button
                className={`toggle-btn ${
                  activeTab === "projects" ? "active" : ""
                }`}
                onClick={() => setActiveTab("projects")}
              >
                <CodeXml size={20} />
                Projects
              </button>

              <button
                className={`toggle-btn ${
                  activeTab === "blogs" ? "active" : ""
                }`}
                onClick={() => setActiveTab("blogs")}
              >
                <MessageSquareQuote size={20} />
                Blogs
              </button>

              <button
                className={`toggle-btn ${
                  activeTab === "techstack" ? "active" : ""
                }`}
                onClick={() => setActiveTab("techstack")}
              >
                <Layers size={20} />
                Tech Stack
              </button>
            </div>
          </div>
          {/* Content Rendering Section */}
          <div className="container mt-5">
            {activeTab === "projects" && <ProjectsContainer />}
            {activeTab === "blogs" && <BlogsContainer />}
            {activeTab === "techstack" && <TechStackContainer />}
          </div>
        </div>
      </section>
    </>
  );
}
