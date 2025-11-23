import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <>
      <section id="about" className="container py-5">
        <div className="text-center">
          <h1 className="display-3 fw-bold lh-1 gradient-text3">About Me</h1>
          <h5 className="text-light">
            <span className="px-2">
              <Sparkles color="#8254d9" />
            </span>
            Transforming ideas into digital experiences
            <span className="px-2">
              <Sparkles color="#8254d9" />
            </span>
          </h5>
        </div>

        <div className="row py-3">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold gradient-text3">Hello, I'm</h1>
            <h1 className="display-4 fw-bold text-white">Soudip Panja</h1>
            <p className="about-me-desc">
              Passionate full-stack developer crafting intuitive digital
              experiences with modern technologies. Specializing in React,
              Node.js, and MongoDB to build scalable and user-centered
              applications.
            </p>
            <div className="quote-container">
              <div className="quote-icon-box">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="quote-text-content">
                "Leveraging AI as a professional tool, not a replacement."
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center text-md-start">
            {/* <img src="/Profile Image.jpg" alt="Profile" /> */}
          </div>
        </div>
      </section>
    </>
  );
}
