import React from 'react';
import PDF from '../data/MahakalaForm.pdf';
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
      <a className="nav" target="_blank" rel="noopener noreferrer" href={PDF}>
        MahakalaForm.pdf
      </a>
      <p className="contact">
        For questions or requests, please fill out the contact form below or
        send me an
      </p>
      <a className="nav" href="mailto:info@mahakala-art.com">
        EMAIL
      </a>

      <form
        className="contact"
        method="POST"
        action="https://getform.io/f/1b6874c8-8532-47be-bd1d-d1e8491ffc1d"
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
