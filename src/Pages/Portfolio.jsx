import { Sparkles } from "lucide-react";

export default function Portfolio() {
  return (
    <>
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
      </div>
    </>
  );
}
