import React from 'react';
import usePageSEO from '../hooks/usePageSEO';
import SingleStatue from './SingleStatue';
import statueData from '../data/statueData';
import { motion } from 'framer-motion';

const Statues = () => {
  usePageSEO({
    title: 'Mahakala Art | Statues',
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
    ogTitle: 'Mahakala Art | Statues',
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
      <h1>
        Statues
        <p>
          Here are presented statue projects that i realised for buddhist
          Centres and collectors worldwide:
        </p>
      </h1>

      {statueData
        .map(statue => {
          return (
            <SingleStatue
              key={statue.id}
              image={statue.image}
              title={statue.title}
              statueDescription={statue.statueDescription}
              paintedBy={statue.paintedBy}
              heightAndYear={statue.heightAndYear}
              location={statue.location}
            />
          );
        })
        .reverse()}
    </motion.div>
  );
};

export default Statues;
