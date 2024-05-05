import React from 'react';
import usePageSEO from '../hooks/usePageSEO';
import PDF from '../data/MahakalaForm.pdf';
import { motion } from 'framer-motion';

const ContactForm = props => {
  usePageSEO({
    title: 'Mahakala Art | Contact',
    description:
      'Mahakala is the best known protector in Tibetan Buddhism. Although his appearance is powerfully protective, his essence is compassion. He conquers hindrances that may appear on the path to enlightenment, and appears in various forms, with two, four or six arms. Two-armed forms are emanations of Vajrapani (Diamond in Hand eng, Chan na Dor je tib), four-armed forms are emanations of Manjushri (Wisdom Buddha eng, Jam pal yang tib) and six-armed forms are emanations of Avalokiteshvara (Loving Eyes eng, Chen re sig tib). A special form of the two-armed Mahakala, particularly honoured in Mongolia, is the Panjara-Mahakala (Gor gyi gon po tib), who protects tents and houses.',
    keywords: [
      'mahakala',
      'art',
      'tsatsa',
      'statue',
      'buddhist',
      'diamondway',
      'vajrayana',
      'karma kagyu',
      'Bernagchen',
      'black coat',
    ],
    ogTitle: 'Mahakala Art | Contact',
    ogDescription:
      'Mahakala is the best known protector in Tibetan Buddhism. Although his appearance is powerfully protective, his essence is compassion. He conquers hindrances that may appear on the path to enlightenment, and appears in various forms, with two, four or six arms. Two-armed forms are emanations of Vajrapani (Diamond in Hand eng, Chan na Dor je tib), four-armed forms are emanations of Manjushri (Wisdom Buddha eng, Jam pal yang tib) and six-armed forms are emanations of Avalokiteshvara (Loving Eyes eng, Chen re sig tib). A special form of the two-armed Mahakala, particularly honoured in Mongolia, is the Panjara-Mahakala (Gor gyi gon po tib), who protects tents and houses.',
    ogImage:
      'https://images.ctfassets.net/x9ncw0vro2xo/3I2qs29LxYZiYno0sjhNPw/7e2fc1e0f1f374799cd50e687600613b/mahakala_Ole_web.jpg',
    ogUrl: 'https://mahakala-art.com/',
  });
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
