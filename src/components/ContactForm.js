import React from 'react';
import Download from './Download';
import MailTo from './MailTo';

const ContactForm = props => {
  return (
    <div className="container">
      <p className="contact construction">
        If you have any questions, requests or would like to place an order, you
        are welcome to
        <br />
        <MailTo className="order" />
      </p>
      <p className="contact construction">
        For further informations, concerning ordering the Mahakala form, please
        download
        <br />
        <Download className="order" />
      </p>
      {/* <h5 className="contact construction">
        !!! CONTACT FORM UNDER CONSTRUCTION !!!
      </h5> */}
      {/*       
      Please fill out
        the contact form below
      <form className="container" onSubmit={props.handleSubmit} method="POST">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="your email adress"
            autocomplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            className="form-control"
            placeholder="your subject"
            autocomplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            rows="10"
            placeholder="your message"
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
       */}
    </div>
  );
};

// export default ContactForm;
// import React from 'react';

// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       name: '',
//       message: '',
//     };
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     fetch('http://localhost:3002/send', {
//       method: 'POST',
//       body: JSON.stringify(this.state),
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => response.json())
//       .then(response => {
//         if (response.status === 'success') {
//           alert('Message Sent.');
//           this.resetForm();
//         } else if (response.status === 'fail') {
//           alert('Message failed to send.');
//         }
//       });
//   }

//   render() {
//     return (
//       <div className="container">
//         <form
//           id="contact-form"
//           onSubmit={this.handleSubmit.bind(this)}
//           method="POST"
//         >
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               aria-describedby="emailHelp"
//               value={this.state.email}
//               placeholder="your email address"
//             autocomplete = 'off';
//               onChange={this.onEmailChange.bind(this)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="subject">Subject</label>
//             <input
//               type="text"
//               className="form-control"
//               value={this.state.subject}
//               placeholder="your subject"
//             autocomplete = 'off';
//               onChange={this.onSubjectChange.bind(this)}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               className="form-control"
//               rows="5"
//               value={this.state.message}
//               placeholder="your message"
//             autocomplete = 'off';
//               onChange={this.onMessageChange.bind(this)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }

//   onEmailChange(event) {
//     this.setState({ email: event.target.value });
//   }

//   onSubjectChange(event) {
//     this.setState({ subject: event.target.value });
//   }

//   onMessageChange(event) {
//     this.setState({ message: event.target.value });
//   }
// }
// }

export default ContactForm;
