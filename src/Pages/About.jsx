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
      </section>
    </>
  );
}
