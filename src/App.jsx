import Navbar from "./components/Navbar";
import "./Styles.css";
import { Sparkles } from "lucide-react";

function App() {
  return (
    <>
      <Navbar />
      <section
        style={{ backgroundColor: "var(--main-bg-color)", minHeight: "100vh" }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8 mt-5">
              
              {/* Badge Animation */}
              <div className="animate-float">
                <div className="badge-glow"></div>
                <div className="badge-inner">
                  <Sparkles color="#23a2e1" />
                  <span className="badge-text">Ready to Innovate</span>
                </div>
              </div>

              {/* NEW TEXT DESIGN */}
              <div className="mt-4">
                <h1 className="display-1 fw-bold lh-1">
                  {/* Line 1: Full Stack (White/Light Gradient) */}
                  <span className="title-block">
                    <span className="text-glow"></span>
                    <span className="gradient-text-light">Full Stack</span>
                  </span>
                  
                  <br />
                  
                  {/* Line 2: Developer (Purple Gradient) */}
                  <span className="title-block mt-2">
                    <span className="text-glow"></span>
                    <span className="gradient-text2">Developer</span>
                  </span>
                </h1>
                <p>Network & Telecon Student</p>
                <p>Tech Enthusiast</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;