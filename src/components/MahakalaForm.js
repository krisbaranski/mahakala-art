import React from 'react';
import usePageSEO from '../hooks/usePageSEO';
import many from '../assets/img/many.jpg';
import maha from '../assets/img/mahakala_108.jpg';
import { motion } from 'framer-motion';

const MahakalaForm = () => {
  usePageSEO({
    title: 'Mahakala Art | Form',
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
    ogTitle: 'Mahakala Art | Form',
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
        Mahakala form
        <p>
          The main purpose of this mahakala form is to inspire many people with
          the physical representation of protective qualities of the enlightened
          mind.
        </p>
      </h1>

      <section className="row">
        <p className="col">
          From 2006 I learn how to build statues in traditional buddhist clay
          technique which originally comes from Himalaya Region (Tibet, Bhutan,
          Ladakh). This Projekt began with a wish. Since years I wanted to build
          a Mahakala form. In this technique it is possible to create
          3-dimentional statues, ritual dancing masks and reliefs
          <em> Tsa-tsa </em>
          (tib.).
          <br />
          The Mahakala form which I show here is a mixture of statue and relief.
          It is also prepared for traditional statuefilling. Once the original
          form is ready, a negative mould is made. This allows to multiply that
          form with the same precision as the original one.
        </p>
        <img className="col" src={maha} alt="original mahakala form" />
      </section>

      <section className="row">
        <p className="col">
          The material which is use for copies is <em> Zellan </em>(porcelain
          plaster), very hard, fine and best quality material for this kind of
          work.
          <br />
          After the mould copy is ready, it can be painted and prepared for
          filling. Traditionally in the East, stone colours are used. Nowadays
          acrylic colours are well adapted. I’m using very good quality acrylic
          for painting the form and real gold powder for “opening” the eyes.
        </p>
        <img className="col" src={many} alt="casted plaster forms" />
      </section>

      <p>
        Painting the form is inspired by my buddhist teacher Lama Ole Nydahl,
        traditional painting teacher Dawa Lhadipa and examples of very good
        quality <em> Thangkas</em> (tib. for traditional roll paintings) of
        Mahakala in Karma Gadhri Tradition.
      </p>
    </motion.div>
  );
};

export default MahakalaForm;
