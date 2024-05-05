import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import usePageSEO from '../hooks/usePageSEO';

import Home from './Home';
import About from './About';
import MahakalaForm from './MahakalaForm';
import Statues from './Statues';
import ContactForm from './ContactForm';
import Impressum from './Impressum';
import PrivacyPolicy from './PrivacyPolicy';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  usePageSEO({
    title: 'Mahakala Art',
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
    ogTitle: 'Mahakala Art',
    ogDescription:
      'Mahakala is the best known protector in Tibetan Buddhism. Although his appearance is powerfully protective, his essence is compassion. He conquers hindrances that may appear on the path to enlightenment, and appears in various forms, with two, four or six arms. Two-armed forms are emanations of Vajrapani (Diamond in Hand eng, Chan na Dor je tib), four-armed forms are emanations of Manjushri (Wisdom Buddha eng, Jam pal yang tib) and six-armed forms are emanations of Avalokiteshvara (Loving Eyes eng, Chen re sig tib). A special form of the two-armed Mahakala, particularly honoured in Mongolia, is the Panjara-Mahakala (Gor gyi gon po tib), who protects tents and houses.',
    ogImage:
      'https://images.ctfassets.net/x9ncw0vro2xo/3I2qs29LxYZiYno0sjhNPw/7e2fc1e0f1f374799cd50e687600613b/mahakala_Ole_web.jpg',
    ogUrl: 'https://mahakala-art.com/',
  });

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<MahakalaForm />} />
        <Route path="/statues" element={<Statues />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
