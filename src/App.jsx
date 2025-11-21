import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import "./Styles.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Sparkles,
  Download,
  Mail,
  Github,
  Linkedin,
  CodeXml,
} from "lucide-react";

const Typewriter = ({ words, wait = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    const typeSpeed = 150;
    const deleteSpeed = 75;
    const pauseTime = wait;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pauseTime);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, wait]);

  return (
    <p className="dynamic-text">
      {`${words[index].substring(0, subIndex)}`}
      <span className="typing-cursor"></span>
    </p>
  );
};

function App() {
  // Define your tech stack here
  const techStack = ["MongoDB", "Express.js", "React", "Node.js"];

  return (
    <>
      <Navbar />
      <section
        style={{ backgroundColor: "var(--main-bg-color)", minHeight: "100vh" }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 mt-5">
              {/* Badge Animation */}
              <div className="animate-float">
                <div className="badge-glow"></div>
                <div className="badge-inner">
                  <Sparkles color="#23a2e1" />
                  <span className="badge-text">Ready to Innovate</span>
                </div>
              </div>

              {/* TEXT DESIGN */}
              <div className="mt-4">
                <h1 className="display-1 fw-bold lh-1">
                  {/* Line 1: Full Stack */}
                  <span className="title-block">
                    <span className="text-glow"></span>
                    <span className="gradient-text-light">Full Stack</span>
                  </span>

                  <br />

                  {/* Line 2: Developer */}
                  <span className="title-block mt-2">
                    <span className="text-glow"></span>
                    <span className="gradient-text2">Developer</span>
                  </span>
                </h1>

                {/* ANIMATED TYPEWRITER SECTION */}
                <div className="mt-5">
                  <Typewriter
                    words={[
                      "Creative Thinker & Detail Oriented",
                      "Tech Enthusiast",
                      "Problem Solver",
                    ]}
                    wait={2000}
                  />
                </div>

                <div className="row">
                  <div className="col-9">
                    <p className="hero-description">
                      I build scalable, impactful, high-performance dynamic
                      applications with a strong focus on clean architecture and
                      user-first design.
                    </p>
                  </div>
                </div>

                <div className="tech-stack-container mt-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className="tech-button">
                      {tech}
                    </div>
                  ))}
                </div>

                {/* CTA BUTTONS SECTION - UPDATED */}
                <div className="cta-container mt-5">
                  <a href="#" className="cta-button">
                    Resume <Download size={20} />
                  </a>
                  <a href="mailto:your@email.com" className="cta-button">
                    Contact <Mail size={20} />
                  </a>
                </div>

                {/* Social Links - NEW DESIGN */}
                <div className="social-links-container">
                  <a
                    href="https://github.com/Soudip-Panja"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    <Github size={28} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/soudip-panja/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    <Linkedin size={28} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://leetcode.com/u/soudip03panja/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                  >
                    <CodeXml size={28} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-center mt-5 mt-md-0">
              <div className="hero-img-container">
                <DotLottieReact
                  src="https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie"
                  loop
                  autoplay
                  className="hero-img"
                />
                <div className="hero-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
