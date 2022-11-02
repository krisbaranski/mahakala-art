import React from 'react';
import Download from './Download';
import { motion } from 'framer-motion';

const ContactForm = props => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <p className="contact">
        For further informations, concerning ordering the Mahakala form, please
        download
      </p>
      <Download className="order" />
      <br />
      <p className="contact">
        For questions or requests, please fill out the contact form below or
        send me an{' '}
        <a
          style={{ color: 'orange', textAlign: 'center' }}
          href="mailto:kris.baranski@web.de"
        >
          EMAIL
        </a>
        <br />
      </p>

      <form
        className="contact"
        method="POST"
        action="https://getform.io/f/219f4d8e-2e04-442c-b7a0-52d9b5536fb7"
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="form-control"
            autocomplete="off"
            required
          />
          <input
            type="email"
            name="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="email adress"
            autocomplete="off"
            required
          />
          <textarea
            name="message"
            className="form-control"
            rows="10"
            placeholder="message"
            autocomplete="off"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
