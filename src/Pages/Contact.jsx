import { UserRound, Mail, MessageSquareText, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section id="Contact" className="pb-5">
        <div className="text-center mb-4">
          <h1 className="display-3 fw-bold lh-1 gradient-text3">Contact Me</h1>
          <p className="contact-caption">
            “Have a question? Send me a message, and I will reply to you right
            away.”
          </p>

          <div className="row g-4 py-4">
            {/* Form Section - Layout kept as col-8 */}
            <div className="col-12 col-lg-8">
              <div className="contact-card">
                <div className="card-body">
                  <form action="https://api.web3forms.com/submit" method="POST">
                    <input
                      type="hidden"
                      name="access_key"
                      value="b2980961-cc29-4599-a516-4cf4d0c525d1"
                    />

                    {/* Name Input + Icon */}
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

                    {/* Email Input + Icon */}
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

                    {/* Message Input + Icon */}
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

            {/* Connect With me - Layout kept as col-4 */}
            <div className="col-12 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4>Connect with Me</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}