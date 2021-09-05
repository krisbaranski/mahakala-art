const ContactForm = props => {
  return (
    <form className="container" onSubmit={props.handleSubmit} method="POST">
      <div className="construction">
        <p>For any questions, requests, orders you are welcome to contact me</p>
        <p>!!! CONTACT FORM UNDER CONSTRUCTION !!!</p> <br />
        <p>
          meanwhile write to
          <a href="mailto:info@mahakala-art.com"> MY EMAIL</a>
        </p>
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="your email adress"
          required
        />
      </div>
      <div className="form-group">
        <label>Subject</label>
        <input
          type="text"
          className="form-control"
          placeholder="your subject"
          required
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          className="form-control"
          rows="10"
          placeholder="your message"
          required
        ></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
