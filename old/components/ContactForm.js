import React, { useState } from 'react';
import { postDb } from "../database";

function ContactForm() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = {
      name: nameInput,
      email: emailInput,
      message: messageInput
    }

    if (!emailInput || !messageInput) {
      window.alert("Please enter an email and a message");
      return
    }

    postDb(message);

    window.alert("Thank you!");

    setNameInput('');
    setEmailInput('');
    setMessageInput('');
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessageInput(e.target.value);
  };
  const handleEmailRequired = (e) => {
    if (!e.target.value) {
      e.target.classList.add("required")
    }
    else {
      e.target.classList.remove("required")
    }
  }
  const handleMessageRequired = (e) => {
    if (!e.target.value) {
      e.target.classList.add("required")
    }
    else {
      e.target.classList.remove("required")
    }
  }

  return (
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={nameInput}
          name="text"
          className="contact-input"
          id="name-input"
          onChange={handleNameChange}
        ></input>
        <input
          type="text"
          placeholder="Email (required)"
          value={emailInput}
          name="text"
          className="contact-input"
          id="email-input"
          onChange={handleEmailChange}
          onMouseLeave={handleEmailRequired}
        ></input>
        <textarea
          type="text"
          placeholder="Message (required)"
          value={messageInput}
          name="text"
          className="contact-input"
          id="message-input"
          onChange={handleMessageChange}
          onMouseLeave={handleMessageRequired}
        ></textarea>
        <button className="contact-button">Send Message</button>
      </form>
  );
}

export default ContactForm;
