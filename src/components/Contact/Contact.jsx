import './Contact.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      {/* Top Contact Info Strip */}
      <div className="contact-strip">
        <div className="contact-strip-item">
          <span className="label">Email</span>
          <a href="mailto:info@accinzia.com">info@accinzia.com</a>
        </div>

        <div className="contact-strip-item">
          <span className="label">Location</span>
          <p>Noida, India</p>
        </div>

        <div className="contact-strip-item">
          <span className="label">Availability</span>
          <p>Open to opportunities</p>
        </div>
      </div>

      {/* Message Card */}
      <div className="contact-card">
        <h3>Send a Message</h3>
        <p className="contact-subtext">
          Use the form below to get in touch. I usually respond within 24 hours.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Write your message"></textarea>
          </div>

          <button type="button" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;



