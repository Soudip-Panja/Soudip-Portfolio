import { UserRound, Mail, MessageSquareText, Send } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      title: "LinkedIn",
      handle: "@soudip-panja",
      link: "https://www.linkedin.com/in/soudip-panja/",
      img: "/LinkedIn.jpeg",
    },
    {
      title: "GitHub",
      handle: "@Soudip-Panja",
      link: "https://github.com/Soudip-Panja",
      img: "/GitHub.png",
    },
    {
      title: "Replit",
      handle: "@SoudipPanja",
      link: "https://replit.com/@SoudipPanja",
      img: "/Replit.png",
    },
    {
      title: "LeetCode",
      handle: "@soudip03panja",
      link: "https://leetcode.com/u/soudip03panja/",
      img: "/LeetCode.png",
    },
    {
      title: "StackBlitz",
      handle: "@Soudip-Panja",
      link: "https://stackblitz.com/@Soudip-Panja",
      img: "/StackBlitz.png",
    },
    {
      title: "CodeSandbox",
      handle: "@soudip-panja",
      link: "https://codesandbox.io/u/soudip-panja",
      img: "/CodeSandbox.jpg",
    },
  ];

  return (
    <>
      <section id="contact" className="pb-5">
        <div className="text-center mb-4">
          <h1 className="display-3 fw-bold lh-1 gradient-text3">Contact Me</h1>
          <p className="contact-caption">
            “Have a question ? Send me a message, and I will reply to you right
            away.”
          </p>

          <div className="row g-4 py-4">
            <div className="col-12 col-lg-8">
              <div className="contact-card">
                <div className="card-body">
                  <h3 className="connect-header">Get in Touch</h3>
                  <form action="https://api.web3forms.com/submit" method="POST">
                    <input
                      type="hidden"
                      name="access_key"
                      value="b2980961-cc29-4599-a516-4cf4d0c525d1"
                    />

                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="name"
                        className="styled-input"
                        placeholder="Your Name"
                        required
                      />
                      <UserRound className="input-icon" />
                    </div>

                    <div className="input-wrapper">
                      <input
                        type="email"
                        name="email"
                        className="styled-input"
                        placeholder="Your Email"
                        required
                      />
                      <Mail className="input-icon" />
                    </div>

                    <div className="input-wrapper">
                      <textarea
                        name="message"
                        className="styled-input"
                        rows="5"
                        placeholder="Enter your message"
                        required
                      ></textarea>
                      <MessageSquareText className="input-icon" />
                    </div>

                    <button type="submit" className="contact-btn">
                      <Send size={20} /> Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="connect-card">
                <h4 className="connect-header">Connect With Me</h4>

                <div className="connect-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-box"
                    >
                      <div className="social-header">
                        <img
                          src={social.img}
                          alt={social.title}
                          className="social-icon-img"
                        />
                        <span className="social-handle">{social.handle}</span>
                      </div>
                      <div className="social-content">
                        <h5 className="social-title">{social.title}</h5>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
