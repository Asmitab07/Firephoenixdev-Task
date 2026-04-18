import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE - INFO */}
          <div className="col-md-5 mb-4 mb-md-0">
            <h2 className="section-title">Get In Touch</h2>

            <p className="contact-text">
              Feel free to reach out for collaborations or <br />just a friendly hello👋
            </p>

            <div className="contact-info">
              <p><strong>Email:</strong> asmitabakale2105@gmail.com</p>
              <p><strong>Location:</strong> Pune, India</p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="col-md-7">
            <div className="contact-card">
              <form className="row g-3">

                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>

                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>

                <div className="col-12">
                  <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
                </div>

                <div className="col-12 text-end">
                  <button className="btn contact-btn">Send Message</button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;