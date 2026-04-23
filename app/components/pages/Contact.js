// import ContactForm from "../ContactForm";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Page</h2>
      <div id="contact-page">
        {/* <div id="contact-form">
        <h3>Contact Form</h3>
        <ContactForm />
        </div> */}
        <ul id="contact-info">
          <li>Email: <a href="mailto:mersopolis@gmail.com">mersopolis@gmail.com</a></li>
          <li>Phone - Call or Text: <a href="tel:8018368141">(801)836-8141</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;