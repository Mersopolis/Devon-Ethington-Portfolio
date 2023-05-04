import React from 'react';
import ContactForm from "../ContactForm";

function Contact(props) {
  
  

  return (
    <div>
      <h1>Contact Page</h1>
      <hr />
      <h2>Contact Form</h2>
      <ContactForm />
      
      <ul id="contact">
        <li><h3>Contact Info:</h3></li>
        <li>Email: <a href="mailto:mersopolis@gmail.com">mersopolis@gmail.com</a></li>
        <li>GitHub: <a href="https://github.com/Mersopolis">Mersopolis</a></li>
      </ul>
    </div>
  );
}

export default Contact;