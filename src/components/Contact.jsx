import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Contact() {
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
        <div id="fields" class="contact-container">
            <div class="grid-form">
                <h3 class="grid-item-title"> Get in Touch</h3>
                <a class="grid-item" href="https://github.com/tauany15"> <i class="fa-brands fa-github"></i></a>
                <a class="grid-item" href="https://www.linkedin.com/in/tauany-silva-santos-43a335144/"> <i class="fa-brands fa-linkedin-in"></i></a>
                <form id="contact" ref={form} onSubmit={sendEmail}>
                    <input class="grid-inputs" type="text" name="user_name" placeholder="Name" required />
                    <input class="grid-inputs" type="email" name="user_email" placeholder="Email" required />
                    <textarea class="grid-inputs message" name="message" placeholder="Message" required />
                    <button class="btn-contact" type="submit">SUBMIT</button>
                </form>
            </div>


        </div>
    );
}

export default Contact;