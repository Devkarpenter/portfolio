function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <form action="#" className="contact__form">
          <input type="text" placeholder="Name" className="contact__input" />
          <input type="email" placeholder="Email" className="contact__input" />
          <textarea placeholder="Your message" className="contact__input" rows="10"></textarea>
          <input type="submit" value="Send" className="contact__button button" />
        </form>
      </div>
    </section>
  );
}
export default Contact;
