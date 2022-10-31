import React from 'react';
import Download from './Download';

const ContactForm = props => {
  return (
    <div className="container">
      <p className="contact construction">
        For further informations, concerning ordering the Mahakala form, please
        download
      </p>
      <Download className="order" />
      <br />
      <p className="contact construction">
        For questions or requests, please fill out the contact form below or
        send me an{' '}
        <a style={{ color: 'orange' }} href="mailto:kris.baranski@web.de">
          EMAIL
        </a>
        <br />
      </p>

      <form className="container" onSubmit={props.handleSubmit} method="POST">
        <div className="form-group">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              autocomplete="off"
              required
            />
          </div>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="email adress"
            autocomplete="off"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="10"
            placeholder="message"
            autocomplete="off"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
