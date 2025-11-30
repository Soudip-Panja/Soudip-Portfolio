import { ExternalLink } from "lucide-react";
const CardBlog = ({ Img, Title, Description, Link }) => {
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
          <a
            href={Link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <span>Read Blog</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function BlogsContainer() {
  const blogs = [
    {
      id: 1,
      title: "How a Tiny Seed Became a Full-Stack Forest",
      description:
        "My story of how a small curiosity in coding turned into a full-stack forest. From frontend leaves to backend roots, this blog explains how each technology helped me grow stronger as a developer.",
      img: "/Full Stack Forest.png",
      link: "https://medium.com/@soudip03panja/how-a-tiny-seed-became-a-full-stack-forest-aa3a4dfa9bfd",
    },
    {
      id: 2,
      title: "The Two Cities of Data: My Journey Through SQL & NoSQL",
      description:
        "The story of my growth in backend development as I walked through the two “data cities” — SQL and NoSQL. A beginner’s exploration of rules, freedom, and how modern platforms blend both worlds.",
      img: "/SQL vs NoSQL.png",
      link: "https://medium.com/@soudip03panja/oo-%EF%B8%8F-the-two-cities-of-data-my-journey-through-sql-nosql-f6526b424c80",
    },
  ];

  return (
    <div className="projects-section">
      <div className="row g-4 justify-content-center">
        {blogs.map((blog) => (
          <div className="col-12 col-lg-6" key={blog.id}>
            <CardBlog
              Img={blog.img}
              Title={blog.title}
              Description={blog.description}
              Link={blog.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}