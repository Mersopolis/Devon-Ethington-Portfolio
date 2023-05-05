import React from 'react';
import ContactForm from "../ContactForm";

function Contact(props) {
  
  

  return (
    <section id="contact">
      <h2>Contact Page</h2>
      <div id="contact-page">
        <div id="contact-form">
        <h3>Contact Form</h3>
        <ContactForm />
        </div>
        <ul id="contact-info">
          <li><h3>Contact Info:</h3></li>
          <li>Email: <a href="mailto:mersopolis@gmail.com">mersopolis@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/Mersopolis">Mersopolis</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;