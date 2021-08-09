const Contact = props => {
  return (
    <form
      className="container"

      //   id="contact-form"
      //   onSubmit={props.handleSubmit.bind(props)}
      //   method="POST"
    >
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label>Subject</label>
        <input type="text" className="form-control" />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea className="form-control" rows="10"></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
