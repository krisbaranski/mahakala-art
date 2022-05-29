import React from 'react';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import MahakalaForm from '../data/MahakalaForm.pdf';

export default function Download() {
  const saveFile = () => {
    saveAs(MahakalaForm);
  };
  return (
    <div className="home_text">
      <Link to="#" onClick={saveFile} className="order">
        Mahakalaform.pdf
      </Link>
    </div>
  );
}
