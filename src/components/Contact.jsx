import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact({ activeTab }) {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm('service_1d5nadt', 'template_38xulfp', form.current, {
        publicKey: 'Nfw6JOuJ68EVcfNj0',
      })
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          setStatusMessage('Failed to send message. Please try again.');
          setIsSending(false);
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className={`contact-container ${
        activeTab !== 'contact' && activeTab !== null ? 'blur' : ''
      }`}
    >
      <div className="contact-wrapper">
        <h2 className="contact-title">Get in Touch</h2>

        <div className="contact-links">
          <a
            href="https://github.com/tauany15"
            aria-label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tauany-silva-santos-43a335144/"
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-inputs">
            <label htmlFor="user_name" className="sr-only">Name</label>
            <input type="text" id="user_name" name="user_name" placeholder="Name" required />
            <label htmlFor="user_email" className="sr-only">Email</label>
            <input type="email" id="user_email" name="user_email" placeholder="Email" required />
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              className="message-input"
              name="message"
              placeholder="Message"
              required
            />
          </div>
          <div className="form-actions">
            <button className="btn-contact" aria-label="Contact me" disabled={isSending}>
              {isSending ? 'Sending...' : 'Contact'}
            </button>
          </div>
        </form>

        {statusMessage && (
          <p role="alert" className="status-message">
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
