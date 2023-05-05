import React, { useState } from 'react';

function ContactForm(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      name: input,
      email: input,
      message: input
    });

    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={input}
          name="text"
          className="contact-input"
          id="name-input"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Email"
          value={input}
          name="text"
          className="contact-input"
          id="email-input"
          onChange={handleChange}
        ></input>
        <textarea
          type="text"
          placeholder="Message"
          value={input}
          name="text"
          className="contact-input"
          id="message-input"
          onChange={handleChange}
        ></textarea>
        <button className="contact-button">Send Message</button>
      </form>
  );
}

export default ContactForm;
