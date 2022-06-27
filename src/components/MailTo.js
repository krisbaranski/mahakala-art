import React from 'react';
import { Link } from 'react-router-dom';

export default function MailTo() {
  const sendMail = () => {
    window.location.href = 'mailto:info@mahakala-art.com';
  };
  return (
    <div className="home_text">
      <Link to="#" onClick={sendMail} className="order">
        contact
      </Link>
    </div>
  );
}
