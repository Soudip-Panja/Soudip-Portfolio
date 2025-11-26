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

          <div className="row">
            <div className="col-8">
              <div className="card" style={{ backgroundColor: "#1A1A2D" }}>
                <div className="card-body">
                  <form action="https://api.web3forms.com/submit" method="POST">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                    <br />
                    <input type="hidden" name="access_key" value="b2980961-cc29-4599-a516-4cf4d0c525d1" />

                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                    <br />
                    <textarea
                      className="form-control"
                      type="text"
                      name="message"
                      rows="5"
                     
                      placeholder="Enter your message"
                      required
                    ></textarea>
                    <br />
                    <button type="submit">
                      <Send /> Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Connect With me */}
            <div className="col-4">
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
