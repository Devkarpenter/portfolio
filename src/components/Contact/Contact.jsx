import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Section Title */}
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        {/* Contact Info Strip */}
        <motion.div
          className="contact-strip"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            {
              label: "Email",
              value: "deveshkarpenter1998@gmail.com",
              link: "mailto:deveshkarpenter1998@gmail.com",
            },
            { label: "Location", value: "Noida, India" },
            { label: "Availability", value: "Open to opportunities" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="contact-strip-item"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
            >
              <span className="label">{item.label}</span>
              {item.link ? (
                <a href={item.link}>{item.value}</a>
              ) : (
                <p>{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Send a Message</h3>
          <p className="contact-subtext">
            Feel free to reach out for opportunities, collaborations, or just a
            quick discussion. I usually respond within 24 hours.
          </p>

          <form className="contact-form">
            <div className="form-row">
              <motion.div
                className="input-group"
                whileFocusWithin={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </motion.div>

              <motion.div
                className="input-group"
                whileFocusWithin={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </motion.div>
            </div>

            <motion.div
              className="input-group"
              whileFocusWithin={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <label>Message</label>
              <textarea rows="4" placeholder="Write your message"></textarea>
            </motion.div>

            <motion.button
              type="button"
              className="contact-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;




