import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Contact({ activeTab }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1d5nadt', 'template_38xulfp', form.current, {
                publicKey: 'Nfw6JOuJ68EVcfNj0',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    console.log("message sent");
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    console.log("message not sent");
                    e.target.reset();
                },
            );
    };
    return (
        <div id="contact" className={`contact-container ${activeTab !== "contact" && activeTab !== null ? 'blur' : ''}`}>
            <h2 className="contact-title"> Get in Touch</h2>
            <div>
                <a className="contact-links" href="https://github.com/tauany15"> <i className="fa-brands fa-github"></i></a>
                <a className="contact-links" href="https://www.linkedin.com/in/tauany-silva-santos-43a335144/"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-inputs">
                    <input type="text" name="user_name" placeholder="Name" required />
                    <input type="email" name="user_email" placeholder="Email" required />
                    <textarea className="message-input" name="message" placeholder="Message" required />
                </div>
                <div className="form-actions">
                    <button className="btn-contact" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;