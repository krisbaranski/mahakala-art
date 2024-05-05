import React from 'react';
import usePageSEO from '../hooks/usePageSEO';
import Slideshow from './Slideshow';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const slides = [
    {
      url: 'https://images.ctfassets.net/x9ncw0vro2xo/3I2qs29LxYZiYno0sjhNPw/7e2fc1e0f1f374799cd50e687600613b/mahakala_Ole_web.jpg',
      title: 'Copenhagen',
    },
    {
      url: 'https://images.ctfassets.net/x9ncw0vro2xo/4xJOndU4gCWUSS9Ot7HBCJ/76f38e569aa219dab60906bfcf40f96e/mahakala_Danny_web.jpg',
      title: 'Kossin',
    },
    {
      url: 'https://images.ctfassets.net/x9ncw0vro2xo/1CtufCiEwGGhg7ZHAj2KdU/c370e0841853333c88dc417fff87642a/mahakala_Gunnar_web.jpg',
      title: 'Braunschweig',
    },
    {
      url: 'https://images.ctfassets.net/x9ncw0vro2xo/rslpgbIka8h18AB4GiMse/b7146e46f15cb284e79556345dd554b3/mahakala_Moritz_web.jpg',
      title: 'Munich',
    },
    {
      url: 'https://images.ctfassets.net/x9ncw0vro2xo/dBsQ40FFobCCG1LSeHwjx/9a64f1be8b7ef8910b2f3ec55314c101/mahakala_Eta_web.jpg',
      title: 'Berlin',
    },
  ];

  const sliderContainer = {
    maxWidth: '700px',
    margin: '0 auto',
  };

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
    <motion.section
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div style={sliderContainer}>
        <Slideshow slides={slides} />
      </div>
      <div className="home_text">
        <h1>Mahakala</h1>
        <p>(sanskr.)</p>
        <p>Black Coat (eng.), Bernag Chen (tib.)</p>
        <p>44cm height, plaster casting, acrylic paint</p>
        <div style={{ marginTop: '40px' }}>
          <Link to="/contact" className="order">
            to order
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
